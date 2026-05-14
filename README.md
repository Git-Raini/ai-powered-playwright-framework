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

# Framework Structure

```text
ai-powered-playwright-framework/
│
├── ai/
├── api/
├── fixtures/
├── pages/
├── screenshots/
├── test-data/
├── tests/
├── utils/
│
├── .github/workflows/
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
- automated execution on push
- GitHub Actions workflows
- report artifact uploads
- CI/CD environment secrets

---

# AI Testing Capabilities

This framework demonstrates:
- AI-assisted test generation
- prompt engineering for QA
- AI-based edge case identification
- enterprise AI testing strategy

---

# Sample Automated Scenarios

## UI
- Login Validation
- Employee Creation Workflow

## API
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

# Author

Raini Desai

Senior QA Engineer | Automation | API Testing | AI-Assisted QA