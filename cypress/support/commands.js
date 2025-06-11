Cypress.Commands.add('createUser', (userData) => {
  const request = {
    method: 'POST',
    url: `${Cypress.config('baseUrl')}/Account/v1/User`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      "userName": userData.userName,
      "password": userData.password
    }
  };

  return cy.request(request)
  });

Cypress.Commands.add('generateToken', (userData) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.config('baseUrl')}/Account/v1/GenerateToken`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      "userName": userData.userName,
      "password": userData.password
    },
  })
})

Cypress.Commands.add('getUser', (userData) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.config('baseUrl')}/Account/v1/Authorized`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      "userName": userData.userName,
      "password": userData.password
    },
  })
})


Cypress.Commands.add('getBooks', () => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.config('baseUrl')}/BookStore/v1/Books`,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  });
}) 

Cypress.Commands.add('addBooksToUser', (userId, token, books) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.config('baseUrl')}/BookStore/v1/Books`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: {
      "userId": userId,
      "collectionOfIsbns": books
    },
  })
})

Cypress.Commands.add('userInfoBooks', (userId, token) => {
  return cy.request({
    method: 'GET',
    url: `/Account/v1/User/${userId}`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    failOnStatusCode: false
  })
}) 