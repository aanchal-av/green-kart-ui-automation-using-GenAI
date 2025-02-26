# Green Kart UI Automation Using GenAI

## Overview
This project enables UI automation for the Green Kart application using Cypress and GenAI-powered enhancements. The process involves recording user interactions, generating Cypress test scripts, and enhancing them using AI for comprehensive test coverage.

## Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install Cypress Chrome Recorder globally:
  ```sh
  npm install -g @cypress/chrome-recorder
  ```

## Steps to Use

### 1. Record the Test Flow
1. Open the target application in a Chromium-based browser.
2. Open Developer Tools (`F12` or `Ctrl + Shift + I`).
3. Navigate to the **"Recorder"** tab.
4. Click on **"Create a new recording"**.
5. Click **"Start recording"** and perform the entire end-to-end (E2E) flow.
6. Stop the recording and download the file as a `.json` file.
7. refer this screen recording for better understanding 

https://github.com/user-attachments/assets/c0dddd99-0dd6-4935-a75d-99ca9b28b73c



### 2. Generate Cypress Test Script
1. Run the following command to convert the recorded JSON file into a Cypress test script:
   ```sh
   npx @cypress/chrome-recorder "C:\Users\Desktop\{filename}.json" --dry
   ```
   ![Screenshot 2025-02-24 163923](https://github.com/user-attachments/assets/d1075949-09e1-484d-80e6-810e584645d9)

2. Create a new Cypress spec file (e.g., `test.spec.js`).
3. Copy and paste the generated script into the spec file.

### 3. Run Cypress Tests
Run the test script using:
```sh
npm run cypress open
```

## Enhancing Tests Using ChatGPT

### 1. Generate Additional Test Cases
- Copy the generated Cypress test script.
- Paste it into ChatGPT and prompt it to generate additional test cases, including edge cases and negative scenarios.

### 2. Refine and Execute
- Review and refine the suggested test cases, ensuring locators and selectors are accurate.
- Add the new test cases to your Cypress spec file.
- Run the tests using:
  ```sh
  npm run cypress open
  ```

## Notes
- Ensure the correct installation of dependencies.
- Update test selectors if needed to avoid flaky tests.
- Regularly maintain test scripts to accommodate UI changes.

## Contributing
Feel free to submit issues or contribute to improving test automation scripts.

---
Happy Testing! 🚀

