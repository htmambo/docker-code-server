FROM ghcr.io/linuxserver/baseimage-ubuntu:jammy

# set version label
ARG BUILD_DATE
ARG VERSION
ARG CODE_RELEASE
# 这里PUID对应的是你本机的用户ID，PGID对应的是你本机的用户组ID
ENV PUID="1026"
ENV PGID="100"
ENV TZ="Asia/Shanghai"
ENV PASSWORD="123456"
ENV SUDO_PASSWORD="123456"
ENV DEFAULT_WORKSPACE="/config/workspace"

LABEL build_version="Linuxserver.io version:- ${VERSION} Build-date:- ${BUILD_DATE}"
LABEL maintainer="aptalca"

# environment settings
ARG DEBIAN_FRONTEND="noninteractive"
ENV HOME="/config"

RUN \
  echo "**** install runtime dependencies ****" && \
  echo " ---- Install php-cs-fixer ----" && \
  curl -L https://github.com/FriendsOfPHP/PHP-CS-Fixer/releases/download/v3.38.0/php-cs-fixer.phar -o /tmp/php-cs-fixer && \
  chmod a+x /tmp/php-cs-fixer && \
  mv /tmp/php-cs-fixer /usr/local/bin/php-cs-fixer && \
  apt-get update && \
  apt-get install -y --no-install-recommends \
    php-cli php-mysql php-curl php-dev php-gd php-mbstring php-xml php-xmlrpc php-zip php-bcmath php-dom && \
  apt-get install -y git subversion php-codesniffer \
    vim wget jq \
    libatomic1 \
    nano \
    net-tools \
    netcat \
    sudo && \
  echo " ---- Install Composer ---- " && \
  php -r "copy('https://getcomposer.org/installer', '/tmp/composer-setup.php');" && \
  php /tmp/composer-setup.php && \
  cp composer.phar /usr/local/bin/composer && \
  rm -rf composer.phar && \
  echo "**** clean up ****" && \
  apt-get clean && \
  rm -rf \
    /config/* \
    /tmp/* \
    /var/lib/apt/lists/* \
    /var/tmp/*

# add local files
COPY ./root /

# ports and volumes
EXPOSE 8443
