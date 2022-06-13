# VSCode Markdown Preview ABC Notation Support

Adds support for [abc music notation](https://abcnotation.com/) to VS Code's builtin markdown preview.

## Features

- Render abc notation within code blocks
~~~markdown
```abc
X:1
T:Speed the Plough
M:4/4
C:Trad.
K:G
|:GABc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|
  GABc dedB|dedB dedB|c2ec B2dB|A2F2 G4:|
|:g2gf gdBd|g2f2 e2d2|c2ec B2dB|c2A2 A2df|
  g2gf g2Bd|g2f2 e2d2|c2ec B2dB|A2F2 G4:|
```
~~~

## Back End

Utilises and packages the [abcjs](https://github.com/paulrosen/abcjs) library for rendering. Currently running on the 6.0.0-beta

## Manual Installation
1. Ensure [vsce](https://www.npmjs.com/package/vsce) is installed via `npm install -g vsce`
2. Clone this git repository
3. Initialise the npm packages `npm install`
4. Package the extension `vsce package`
5. Install into code `code --install-extension vscode-markdown-abc-0.0.1.vsix`

## Future Work
- [ ] Fix Packaging Metadata
- [ ] Add Extension Icon
- [ ] Publish to VSCode Marketplace
- [ ] Publish to Open VSX Registry
- [ ] Display Errors
- [ ] Add support for other renderer options

<!--
## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.
-->

<!--
## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.
-->

## Acknowledgements

- This extension is heavily based off of [Markdown Preview Mermaid Support](https://github.com/mjbvz/vscode-markdown-mermaid).

- [ABC.js](https://github.com/paulrosen/abcjs) is the main workhorse rendering the notation. All credits for the interpreter and rendering goes to that team.

- [abc notation](https://abcnotation.com/) is a specification invented by Chris Walshaw to notate music in plain text format. Credits go to him and the other contributors for coming up the specification.
