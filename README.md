## Paste Guard

A browser extension that displays a confirmation before pasting content on any website, allowing you to have control over the paste action. Compatible with Google Chrome and Mozilla Firefox using `manifest_version: 3`.

---

## Table of Contents

- [Description](#description)
- [Installation](#installation)
  - [Google Chrome](#google-chrome)
  - [Mozilla Firefox](#mozilla-firefox)
- [How It Works](#how-it-works)
- [Considerations](#considerations)
- [License](#license)

---

## Description

This extension intercepts the paste (`paste`) event on any website and displays a confirmation to the user. If the user confirms, the paste proceeds normally. Otherwise, the paste is canceled.

---

## Installation

### Google Chrome

1. **Download or clone this repository** to your computer.

2. **Open Google Chrome**.

3. In the address bar, type `chrome://extensions/` and press **Enter**.

4. **Enable Developer Mode** in the top right corner.

5. Click on **Load unpacked**.

6. **Select the folder** where you saved the extension files.

7. The extension will be loaded and will appear in the list of installed extensions.

### Mozilla Firefox

1. **Download or clone this repository** to your computer.

2. **Open Mozilla Firefox**.

3. In the address bar, type `about:debugging` and press **Enter**.

4. In the sidebar menu, click on **This Firefox**.

5. Click on **Load Temporary Add-on**.

6. **Select the `manifest.json` file** in the folder where you saved the extension files.

7. The extension will be temporarily loaded in Firefox. Remember that it will be removed when the browser is restarted.

---

## How It Works

1. **When attempting to paste content** on any website (using `Ctrl + V` or right-clicking and selecting "Paste"), the extension intercepts the paste event.

2. **A dialog box** will appear asking: **"Do you want to paste the clipboard content?"**

   - **If you click "OK"**, the content will be pasted normally.
   - **If you click "Cancel"**, the paste will be canceled.

---

## Considerations

- **Manifest V3 Compatibility:**

  - `manifest_version: 3` is fully supported by Google Chrome.
  - In Mozilla Firefox, support for Manifest V3 is still under development. If you encounter issues, you may need to modify the `manifest.json` to use `manifest_version: 2`.

- **Permissions:**

  - The extension does not require special permissions, making it more secure and less invasive.

---

## License

This project is distributed under the [MIT License](LICENSE).