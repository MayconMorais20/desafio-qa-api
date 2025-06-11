# API Automation Project - DemoQA

## Project Overview
This project is designed to automate API testing using Cypress, focusing on the user creation endpoint provided by the DemoQA API. The automation follows best practices and design patterns for API testing, ensuring maintainability and scalability.

## Project Structure
The project is organized as follows:
```
api-automation-project
├── cypress
│   ├── integration
│   │   └── api
│   │       └── user.spec.js
│   ├── support
│   │   ├── commands.js
│   │   └── index.js
│   └── fixtures
│       └── user.json
├── reports
│   └── api
│       └── user.html
├── scripts
│   └── generate-report.js
├── cypress.json
├── package.json
└── README.md
```

## Project Initiation
1. **Clone the Repository**: 
   Clone the project repository to your local machine.
   ```
   git clone <repository-url>
   cd api-automation-project
   ```

2. **Install Dependencies**: 
   Run the following command to install the required dependencies:
   ```
   npm install
   ```

3. **Configure Cypress**: 
   Update the `cypress.json` file if necessary to set the base URL or other configurations.

## Test Execution
1. **Run Tests**: 
   Execute the API tests using the following command:
   ```
   npx cypress run --spec 'cypress/integration/api/user.spec.js'
   ```

2. **View Results**: 
   After the tests have run, the results will be available in the `reports/api/user.html` file. Open this file in a web browser to view the detailed report.

## Reporting
- The `scripts/generate-report.js` file can be used to generate a new report based on the latest test results. Ensure that the necessary libraries are included in the `package.json` for report generation.

## Test Scenarios
The test cases in `cypress/integration/api/user.spec.js` cover the following scenarios:
- Creating a user with valid data.
- Validating the response status code and message.
- Handling errors for invalid data submissions.

## Conclusion
This API automation project provides a robust framework for testing the DemoQA API endpoints. By following the outlined steps, you can easily set up, execute, and report on your API tests.