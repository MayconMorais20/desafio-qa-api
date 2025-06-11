import { expectedResponses } from '../../fixtures/testData';
import { UserInfo } from '../../fixtures/userInfo';

describe('DemoQA API Tests', () => {
  const userInfo = new UserInfo();

  it('DEMO001 - should create a new user', () => {
    cy.createUser(userInfo.getUser()).then((response) => {
      expect(response.status).to.eq(expectedResponses.createUser.success.status);
      expect(response.body.username).to.eq(userInfo.getUser().userName);
      expect(response.body.userID).to.not.be.empty;
      expect(response.body.books).to.deep.equal(expectedResponses.createUser.success.books);
      userInfo.setUserID(response.body.userID); 
    });
  });

  it('DEMO002 - should generate token for the user', () => {
    cy.generateToken(userInfo.getUser()).then((response) => {
      expect(response.body.token).to.not.be.empty;
      expect(response.body.expires).to.not.be.empty;
      expect(response.body.status).to.eq(expectedResponses.generateToken.sucess.statusMessage);
      expect(response.body.result).to.eq(expectedResponses.generateToken.sucess.result);
      expect(response.status).to.eq(expectedResponses.generateToken.sucess.status);
      userInfo.setUserToken(response.body.token); // Update userID and token
      });
  });

  it('DEMO003 - should confirm user authorization', () => {
    cy.getUser(userInfo.getUser()).then((response) => {
      expect(response.status).to.eq(expectedResponses.getUser.success.status);
      expect(response.body).to.eq(expectedResponses.getUser.success.response);
    });
  });

  it('DEMO004 - should list all books', () => {
    cy.getBooks().then((response) => {
      expect(response.status).to.eq(expectedResponses.listBooks.success.status);
      expect(response.body.books).to.have.length.greaterThan(0);
      expect(response.body.books).to.deep.equal(expectedResponses.listBooks.success.response.books);
    });
  });

  it('DEMO005 - should add books to the user', () => {
    cy.addBooksToUser(userInfo.getUserID(), userInfo.getToken(), expectedResponses.addBooksToUser.success.isbnBooksList).then((response) => {
      expect(response.status).to.eq(expectedResponses.addBooksToUser.success.status);
      expect(response.body.books).to.have.length(expectedResponses.addBooksToUser.success.isbnBooksList.length);
      expect(response.body.books[0].isbn).to.eq(expectedResponses.addBooksToUser.success.isbnBooksList[0].isbn);
      expect(response.body.books[1].isbn).to.eq(expectedResponses.addBooksToUser.success.isbnBooksList[1].isbn);
    });      
  });

  it('DEMO006 - should get user info', () => {
    cy.userInfoBooks(userInfo.getUserID(), userInfo.getToken()).then((response) => {
      expect(response.status).to.eq(expectedResponses.userInfoBooks.success.status);
      expect(response.body.username).to.eq(userInfo.getUser().userName);
      expect(response.body.userId).to.eq(userInfo.getUserID());
      expect(response.body.books).to.have.length(2);
      expect(response.body.books[0]).to.deep.equal(expectedResponses.userInfoBooks.success.books[0]);
      expect(response.body.books[1]).to.deep.equal(expectedResponses.userInfoBooks.success.books[1]);
      });
  });
})