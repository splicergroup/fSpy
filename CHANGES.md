# Changes from upstream fSpy

This is a modified version of fSpy (https://github.com/stuffmatic/fSpy), based on upstream commit 702189e (version 1.1.0-beta.3). Modifications by Ryan Hussain, October 2026. Distributed under the GPL-3.0 license, like the original.

## 1.1.0-arm64.1 (October 2026)

### Apple Silicon support
- Upgraded Electron from 8 to 44.7.0, which runs natively on Apple Silicon (arm64) Macs.
- Upgraded electron-builder to 26, TypeScript to 4.9, ts-loader to 8, tslint to 6 and electron-window-state to 5. Removed `@types/electron-window-state`, which the new version makes unnecessary.
- Replaced the removed `remote` module: error dialogs and the version label now use IPC messages to the main process.
- Drag-and-drop resolves file paths with `webUtils.getPathForFile`, since `File.path` was removed from Electron.
- Added the `dist-mac-arm64` build script, which builds an ad-hoc signed `.dmg` and `.zip`.
- The webpack scripts set `NODE_OPTIONS=--openssl-legacy-provider` so webpack 4 runs on current Node.js.

### Dark theme
- Side panel colors are CSS variables, with a dark set used when the theme is dark.
- New **View → Appearance** menu: Use system setting, Light or Dark. The choice is saved in `preferences.json` in the app's settings folder.

### Copy and paste
- Added a standard Edit menu, so Cut, Copy, Paste, Undo and Select All work in text fields on macOS.
- The result panel's Copy buttons write to the clipboard through the main process.

### Identity
- New app ID (`tv.splicer.fspy`), package name, author and version, so this build is distinguishable from the official fSpy and keeps its settings separately.
