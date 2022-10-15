# CodeAPill mobile app with WebDriverIO and Cucumber

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Action Status](https://github.com/WarleyGabriel/demo-webdriverio-cucumber/workflows/CI/badge.svg)](https://github.com/WarleyGabriel/demo-webdriverio-cucumber/actions)

In this project the user can find,select and order the medicne from nearby drug store [Automation Practice](http://automationpractice.com).  
These tests are developed in TypeScript with [WebDriverIO V6](http://webdriver.io/) and [Cucumber](https://cucumber.io/) and Appium

## Features

-   WebDriverIO
-   [Expect-webdriverio](https://github.com/webdriverio/expect-webdriverio)
-   Page Object Pattern
-   Android Native App automation
-   Allure report (screenshots on failure) and Timeline report

## Requirements

-   node >= 18.10.0
-   npm >= 8.19.2
-   java >=11.0.12
-   appium >=1.22

## Getting Started

Install the dependencies:

```bash
npm install
```
```

Run e2e tests:

```bash
npx wdio ./config/android.config.js
```

## Reports

### Allure

Run this command to generate the allure report in the directory `./test-report/allure-report`:

```bash
allure generate --clean
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
allure open
```

```

