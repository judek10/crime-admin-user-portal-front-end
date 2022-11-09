export class User {
    email : string;
    id : string;
    isAdmin : boolean;

    constructor(userId : string, email : string, isAdmin : boolean) {
        this.email = email;
        this.id = userId;
        this.isAdmin = isAdmin;
    }
}
