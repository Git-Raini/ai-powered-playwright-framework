![Playwright](https://img.shields.io/badge/Playwright-Automation-green)

![TypeScript](https://img.shields.io/badge/TypeScript-Framework-blue)

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-black)

![Allure Report](https://img.shields.io/badge/Allure-Reporting-orange)

![API Testing](https://img.shields.io/badge/API-Testing-red)

![AI Testing](https://img.shields.io/badge/AI-Assisted_Testing-purple)

# AI-Powered Playwright Automation Framework

Enterprise-grade Playwright + TypeScript automation framework designed for:

- UI Automation
- API Automation
- CI/CD Integration
- AI-Assisted Testing
- Enterprise Test Architecture

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Allure Reporting
- REST API Testing

---

# Framework Features

## UI Automation

- Page Object Model (POM)
- Reusable Fixtures
- Utility Layer
- Dynamic Test Data
- Screenshot Utilities

## API Automation

- GET API Validation
- POST API Validation
- Reusable API Client Layer
- Response Assertions

## Reporting

- Playwright HTML Reports
- Allure Reports
- Execution Traces

## CI/CD

- GitHub Actions Integration
- Automated Test Execution
- Environment Secrets Handling

## AI-Assisted Testing

- AI Prompt Library
- AI Test Generation Workflow
- Enterprise AI Testing Strategy

---

# Framework Architecture

```text
ai-powered-playwright-framework/
│
├── ai/
│   ├── ai-prompts.md
│   ├── ai-test-generation.md
│   └── ai-testing-strategy.md
│
├── api/
│   ├── apiClient.ts
│   ├── usersAPI.spec.ts
│   └── createUserAPI.spec.ts
│
├── fixtures/
│   └── baseFixture.ts
│
├── pages/
│   ├── LoginPage.ts
│   └── PIMPage.ts
│
├── screenshots/
│
├── test-data/
│   ├── loginData.ts
│   └── employeeData.ts
│
├── tests/
│   ├── login.spec.ts
│   └── addEmployee.spec.ts
│
├── utils/
│   ├── dateUtils.ts
│   ├── env.ts
│   ├── randomUtils.ts
│   └── screenshotUtils.ts
│
├── .github/workflows/
│   └── playwright.yml
│
├── playwright.config.ts
├── package.json
├── README.md
└── .env
```

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/Git-Raini/ai-powered-playwright-framework.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

---

# Environment Configuration

Create `.env` file:

```env
BASE_URL=https://opensource-demo.orangehrmlive.com

ORANGE_HRM_USERNAME=Admin

ORANGE_HRM_PASSWORD=admin123
```

---

# Execute UI Tests

```bash
npx playwright test
```

---

# Execute API Tests

```bash
npx playwright test api/
```

---

# Execute Specific Test

```bash
npx playwright test tests/login.spec.ts
```

---

# Generate Allure Report

```bash
npx allure generate allure-results --clean
```

```bash
npx allure open
```

---

# GitHub Actions CI/CD

This framework supports:

- Automated execution on push
- GitHub Actions workflows
- Report artifact uploads
- CI/CD environment secrets

---

# AI Testing Capabilities

This framework demonstrates:

- AI-assisted test generation
- Prompt engineering for QA
- AI-based edge case identification
- Enterprise AI testing strategy

---

# Sample Automated Scenarios

## UI Scenarios

- Login Validation
- Employee Creation Workflow

## API Scenarios

- GET Users API
- POST Create User API

---

# Future Enhancements

- Docker Integration
- Database Validation
- Retry Strategies
- Parallel Execution Optimization
- Visual Regression Testing
- AI-powered Self-Healing Locators

---

# Why This Framework?

This framework demonstrates modern QA engineering practices including:

- Scalable Playwright architecture
- Enterprise automation design patterns
- API + UI integrated automation
- CI/CD pipeline implementation
- AI-assisted QA workflows
- Reusable framework utilities
- Professional reporting and debugging

---

# Author

## Raini Desai

Senior QA Engineer | Automation | API Testing | AI-Assisted QA