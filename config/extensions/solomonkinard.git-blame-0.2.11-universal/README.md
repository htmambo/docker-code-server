# Go back in time 🔮

![Back](https://whowideweb.com/?f=2022/08/Git%20Blame/0.2.2.png)

# Context menu 👩🏾‍🍳

![Back](https://whowideweb.com/?f=2022/08/Git%20Blame/0.2.6.png)

# Blazing fast ⚡️

![Log](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230439.png)

# Inline blame 🏁

![Log](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230460.png)

# Diff interactively 📝

![Interactive](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230453.png)

# Git online 🌎

![Command Palette](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230420.png)

# User friendly 🐶

![Settings](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.6.png)

# Line history 📜

![Diff](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230418.png)

# Search 👀

![Search](https://whowideweb.com/?f=2023/05/Git%20Search/0.0.3.gif)

# Custom urls 🧤

![Click](https://whowideweb.com/?f=2022/08/Git%20Blame/0.1.820230427.png)

# Features 🎞️
* Command palette: ⌘↑p, "Git Blame: ..."
* Search menu (or command palette).
* Line history menu (or command palette).
* File history menu to see how the file evolved over time.
* Document history menu to see how the file contents evolved, including renames.
* Log or reflog menu.
* And much more.

# Developers 🧑🏾‍🦱

package.json
```
{ "extensionDependencies": ["solomonkinard.git-blame"] }
```

Get the commit id for the current line.
```
const id: string | undefined =
  await vscode.commands.executeCommand("gitBlame.getShaForCurrentLine");
console.log(id);
```

Get the git commit ids whenever a line is focused.
```
vscode.commands.executeCommand("git-blame.commands.onShaForCurrentLine",
  (ids: string[]) => console.log(ids));
```

Get the git commit ids whenever a file is focused.
```
vscode.commands.executeCommand("git-blame.commands.onAllShasForFile",
  (ids: string[]) => console.log(ids));
```

Get the git commit ids for the file.
```
const ids = await vscode.commands.executeCommand(
  "git-blame.commands.getAllShasForFile");
console.log(ids);
```

Get the commits for the file.
```
vscode.commands.executeCommand(
  "git-blame.commands.onShaListingIndexedByLine",
  (shaForEachLine: string[]) => console.log(shaForEachLine));
```

Get commits for the commit ids.
```
const shaToCommitMap: Map<string, Commit> =
  await vscode.commands.executeCommand("git-blame.commands.getAllCommits");
console.log(shaToCommitMap);
```

Commit type:
```
interface Commit {
  sha: string;
  date?: string;
  author?: string;
  mail?: string;
  summary?: string;
  previous?: string;
}
```
