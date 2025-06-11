# API Automation DemoQA

This project contains API automation tests for the DemoQA API using Cypress and JavaScript.

## Project Structure

```
├── cypress/                      # Cypress directory
│   ├── e2e/                      # End-to-end tests
│   │   └── api/                  # API test specifications
│   │       └── demoqa.api.cy.js  # Test file for DemoQA API
│   ├── fixtures/                 # Test data
│   ├── results/                  # Directory to store test results and reports
│   └── support/                  # Helper functions and commands
│      ├── commands.js            # Custom Cypress commands
│      └── e2e.js                 # Configuration for end-to-end tests
│   
├── cypress.config.js             # Cypress configuration file
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation
```

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Setup Instructions

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running Tests

### Open Cypress Test Runner
```bash
npm run cy:open
```

### Run Tests in Headless Mode
```bash
npm run cy:run
```

### Generate HTML Report
```bash
npm run cy:report
```

## Test Scenarios

The automation covers the following scenarios:

1.  **Create a new user:** Tests the creation of a new user via the API, verifying the response status, username, userID, and that the books array is initialized correctly.
2.  **Generate authentication token:** Tests the generation of an authentication token for a user, verifying the token, expiration, status, and result in the response.
3.  **Confirm user authorization:** Tests whether a user is authorized, verifying the response status and body.
4.  **Get available books:** Tests retrieval of the list of available books, verifying the response status and that the list contains books.
5.  **Add selected books to user:** Tests the addition of books to a user's account, verifying the response status and that the books are added correctly.
6.  **Get user information with books:** Tests retrieval of a user's information along with their books, verifying the response status, username, userID, and the details of the books.

## Reports

After running the tests with `npm run cy:report`, you can find the HTML report in the `cypress/results` directory. The report includes:

- Test execution summary
- Pass/fail status for each test
- Detailed test steps
- Screenshots (if any)
- Error messages (if any)

## Notes

- The tests use a unique username for each run to avoid conflicts
- The automation selects the first two books from the available list
- All API responses are validated for correct status codes and response structure