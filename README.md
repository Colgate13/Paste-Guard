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
- [Privacy policies](#privacy-policies)
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

## Privacy policies

**Privacy Policy for the "Paste Guardian" Extension**

**1. Information Collection**

- **Personal Information**: The extension **does not** collect, store, or transmit any personally identifiable information.
- **Usage Data**: The extension stores a list of allowed sites for pasting ("allowedSites") locally in your browser. This data is used solely to customize the extension's behavior based on your preferences.

**2. Use of Information**

- The information stored is used exclusively to:
  - Determine when to display a confirmation prompt when you attempt to paste content on a website.
  - Manage the list of websites where pasting is permitted without confirmation.

**3. Information Sharing**

- **We do not share** any information with third parties.
- All data remains stored locally on your device and is not transmitted to any external servers.

**4. Information Security**

- We employ industry-standard measures to protect the information stored by the extension.
- However, please note that no security measure is entirely foolproof. We recommend keeping your browser and extensions up to date.

**5. Consent**

- By using the extension, you agree to the terms outlined in this privacy policy.

**6. Changes to This Privacy Policy**

- We may update this privacy policy from time to time.
- Any changes will be posted on this page with an updated revision date.

---

## License

This project is distributed under the [MIT License](LICENSE).