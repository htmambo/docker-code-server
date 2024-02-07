#!/bin/bash

ROOT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")"; pwd -P)"

# 文件名用于存储上次下载的版本号
VERSION_FILE="$ROOT_PATH/config/.last_downloaded_version"

# 获取最新版本号
echo "获取最新版本号"
CODE_RELEASE=$(curl -sX GET https://api.github.com/repos/coder/code-server/releases/latest | awk '/tag_name/{print $4;exit}' FS='[""]' | sed 's|^v||')
echo "最新版本号为：$CODE_RELEASE"

# 如果版本文件存在且版本没有更新，那么退出脚本
if [ -f "$VERSION_FILE" ]; then
    LAST_VERSION=$(cat "$VERSION_FILE")
    echo "上次下载的版本号为：$LAST_VERSION"
    # 如果版本号相同或者小于上次下载的版本号，那么退出脚本
    if [ "$CODE_RELEASE" = "$LAST_VERSION" ] || [ "$CODE_RELEASE" \< "$LAST_VERSION" ]; then
        echo "已经是最新版本，无需更新"
        exit 0
    fi
fi

# 下载最新版本的 code-server
curl -o /tmp/code-server.tar.gz -L "https://github.com/coder/code-server/releases/download/v${CODE_RELEASE}/code-server-${CODE_RELEASE}-linux-amd64.tar.gz"

# 如果下载成功，那么更新版本文件
if [ $? -eq 0 ]; then
    rm -rf "$ROOT_PATH"/app/code-server
    mkdir -p "$ROOT_PATH"/app/code-server
    tar xf /tmp/code-server.tar.gz -C "$ROOT_PATH"/app/code-server --strip-components=1
    echo $CODE_RELEASE > $VERSION_FILE
    echo "Successfully downloaded code-server version $CODE_RELEASE and updated the version file."
else
    echo "Failed to download code-server version $CODE_RELEASE."
fi


