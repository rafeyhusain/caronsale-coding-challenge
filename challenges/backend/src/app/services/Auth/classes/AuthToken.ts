export class AuthToken {
    
    token: string;
    authenticated: boolean;
    userId: string;
    internalUserId: Number;
    internalUserUUID: string;
    type: Number;
    privileges: string

    constructor(authResponse: any) {
        this.token = authResponse.token;
        this.authenticated = authResponse.authenticated;
        this.userId = authResponse.userId;
        this.internalUserId = authResponse.internalUserId;
        this.internalUserUUID = authResponse.internalUserUUID;
        this.type = authResponse.type;
        this.privileges = authResponse.privileges;
    }
}
