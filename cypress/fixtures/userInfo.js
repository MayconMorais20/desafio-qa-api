export class UserInfo {
    constructor() {
        this.userID;
        this.token;
        this.__USERNAME = `testuser${Date.now()}`;
        this.__PASSWORD = 'Aa12@345'
    } 

    getUserID() {
        return this.userID;
    }

    getToken() {
        return this.token;
    }

    setUserID(id) { 
        this.userID = id;
    }

    setUserToken(authToken) {
        this.token = authToken;
    }

    getUser() {
        return {
            userName: this.__USERNAME,
            password: this.__PASSWORD
        }
    }
}