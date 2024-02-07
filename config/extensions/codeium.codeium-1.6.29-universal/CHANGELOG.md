# Changelog

All notable changes to the Codeium extension will be documented in this file.

## [1.6.28] - 2024-01-30

- Open Codeium University of first startup.

## [1.6.27] - 2024-01-26

- Codeium Teams users have increased context size for more personalized results.
- Show Codeium Plan info in the Chat panel footer.

## [1.6.26] - 2024-01-23

- Added Codeium University

## [1.6.24] - 2024-01-18

- Improved logging.
- Codeium Chat panel light / dark / auto theme support.
- Add delete all conversations button to Codeium Chat.

## [1.6.16] - 2023-12-28

- Add `@terminal` mention in chat

## [1.6.15] - 2023-12-27

- Show user's email address in the VSCode status bar info box
- Language server download progress is displayed during download

## [1.6.11] - 2023-12-12

- Added support for non Python/Markdown cells in VSCode Notebooks
- Improve context fetching with different casing
- Fix bug with indexing

## [1.6.3] - 2023-12-07

- Improve fetched context relevance

## [1.4.27] - 2023-12-05

- Fix CodeLens for C++ constructors

## [1.4.25] - 2023-11-30

- Code lens to "Explain" a class definition.

## [1.4.23] - 2023-11-28

- User settings in the Codeium Chat panel to toggle opening to your most recent conversation vs. a new conversation when you open the chat panel.

## [1.4.17] - 2023-11-13

- You can now chat with Codeium about specific repos using `@repo` mentions in Chat.
- Bug fixes

## [1.4.8] - 2023-11-02

- Codeium Command available in open beta, with support for edits.
- GPT-4 for Codeium in closed beta.
- Bug fixes to Codeium Chat `@mentions` on Windows.
- Bug fix for Chat history.
- Performance fix for high frequency refreshes.

## [1.4.6] - 2023-10-31

- GPT-4 enabled for Codeium Teams users.
- When opening Codeium Chat, will now default to a brand new conversation.
- Fixed some bugs in the auth login flow to make it easier for new users to log in.
- Minor bug fixes across autocomplete and chat.

## [1.4.1] - 2023-10-23

- Add support for classes to be referenced using `@` (in addition to function names).
- Codeium Chat supports multiple parallel conversations now using the menu in the top right.
- Public profiles, achievements, and usernames are now available.
- Fixed a potential issue with starting the VS Code extension if the backend was unavailable.

## [v1.2.97] - 2023-10-03

- Enable forcing context in Codeium Chat.
- Enable re-running Codeium Chat queries without context.
- Introducing Codeium Chat mentions: type `@` to search through functions to explicitly include in your message.
- Major new features are announced via update log popup in VS Code.

## [1.2.93] - 2023-09-25

- Improvements to Markdown rendering in Codeium Chat
- Theme compatability bug fixes to Codeium Chat

## [1.2.89] - 2023-09-19

- Add CodeLens support for constructors in Python, JavaScript, and TypeScript.

## [1.2.87] - 2023-09-13

- New "Explain Problem" button on errors in your editor to have Chat help fix your issues.
- Codeium Chat can be opened in an editor tab via Command Palette and sidebar popout button.
- Improved messaging in the chat panel if your Chat is disabled (telemetry, team status, etc.)
- Chat message input styling changes.
- Fix edge case bug in search.
- Chat history is separated by workspace in VS Code.

## [1.2.85] - 2023-09-07

- Certain Chat code snippets can be inserted directly into the terminal
- Fix connection issues with Codeium Chat on remote SSH VSCode instances
- Improved Chat performance and UI bugs
- Insert Shell commands into the terminal from chat

## [1.2.82] - 2023-09-01

- Show top IDEs used on profile page

## [1.2.79] - 2023-08-30

- Unify JetBrains and VSCode chat. There should be no noticeable changes to the VSCode chat experience. Users will also have a more reliable experience clicking code lenses (panel no longer needs to be visible for the assistant to begin responding).

## [1.2.77] - 2023-08-28

- Add VS Code CodeLens support for Ruby

## [1.2.59] - 2023-08-03

- Improved performance on very large files.

## [1.2.55] - 2023-07-24

- Insert code snippet from Chat at cursor position
- General bug fixes and improvements

## [1.2.53] - 2023-07-18

- Performance speedup for Autocomplete with Context Module

## [1.2.38] - 2023-06-20

- Context Module: retrieve information from local context to improve chat and autocomplete generations
- Search: better support for classes, structs and interfaces
- General bug fixes and performance improvements

## [1.2.36] - 2023-06-13

- Diff view when refactoring code in Codeium Chat is now toggleable
- General bug fixes and improvements

## [1.2.29] - 2023-06-07

- New option to "Generate Unit Tests" in the function Refactor menu
- General bug fixes

## [1.2.26] - 2023-05-25

- Function refactor leverages diff view so you can apply suggested changes directly to your editor
- Bug fixes with Codeium Chat support on Windows
- General bug fixes and improvements

## [1.2.21] - 2023-05-19

- Fixed issue with streaming timeouts for long chat generations
- General bug fixes

## [1.2.19] - 2023-05-11

- Docstring generation improvements
- General bug fixes bugs with diff view

## [1.2.17] - 2023-05-11

- Codeium Chat docstring generation can apply proposed changes to your editor
- Improved Chat error visibility with more graceful handling, visibility, and recovery
- Remove Code Lenses on one line functions to avoid clutter
- General bug fixes and improvements

## [1.2.13] - 2023-05-03

- Telemetry bug fixes
- Docstring generation improvements for a bunch of languages
- General chat UX improvements

## [1.2.10] - 2023-04-26

- Select code block in editor and right click to refactor / explain
- Codeium Chat support for Input Method Editor (IME) languages
- Fix Codeium Chat message ordering bugs for computers with non-standard datetime settings
- Codeium Chat messages sent by user will not be markdown formatted
- General bug fixes and improvements

## [1.2.4] - 2023-04-18

- Codeium Chat available for general use
- Clarify messaging surrounding telemetry
- Other bug fixes and general stability improvements

## [1.2.3] - 2023-04-13

- Codeium Chat bug fixes, specifically with duplicate messages
- New "Scroll to Bottom" prompt to ensure you can live follow chat responses
- Other general reliability and stability fixes

## [1.2.2] - 2023-04-11

- Codeium Chat available in beta
- Code lenses appear above function signatures for refactoring, explaining, and docstring generation

## [1.1.69] - 2023-03-27

- Codeium can now be triggered via the shortcut `Alt + \`

## [1.1.67] - 2023-03-24

- Improvements to search support for Java, JavaScript, PHP

## [1.1.63] - 2023-03-23

- Rolling out "fill in the middle" model improvements

## [1.1.55] - 2023-03-13

- Enhanced Codeium Search with exact string matching

## [1.1.51] - 2023-03-08

- Released Codeium Search

## [1.1.39] - 2023-02-16

- Significantly improved performance on Windows

## [1.1.35] - 2023-02-07

- Reduce repetitive completions
- Higher quality completions for more languages
- Fixed a bug involving CRLF line endings

## [1.1.7] - 2022-12-23

- Improve PHP support
- Make experimental languages opt-in

## [1.1.4] - 2022-12-20

- Support for Jupyter Notebooks

## [1.1.0] - 2022-12-12

### Added

- Support Linux ARM

### Updated

- Improve CPU compatibility on Linux x64
- Improve proxy support
- Respect VS Code proxy settings
- Only show welcome message after login

## [0.5.0] - 2022-11-30

### Added

- Code snippet telemetry opt out (see <https://www.codeium.com/profile>)
- Google SSO for auth

## [0.4.0] - 2022-10-31

### Updated

- Improved completion cutoff reasoning

## [0.3.0] - 2022-10-25

### Added

- Monaco editor web support
- Multi-language support

## [0.2.0] - 2022-10-21

### Updated

- Internal build changes

## [0.1.0] - 2022-10-13

### Added

- Initial release
