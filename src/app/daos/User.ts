export class User implements IUser {
    id: string;
    username: string;
    name: string;
    createdOn: Date;
    updatedOn: Date;
    organizationId: string;
    email: string;
    isAdmin: boolean;
    constructor(userInfo?: IUser) {
        this.id = userInfo.id;
        this.username = userInfo.username;
        this.name = userInfo.name;
        this.createdOn = userInfo.createdOn;
        this.updatedOn = userInfo.updatedOn;
        this.organizationId = userInfo.organizationId;
        this.email = userInfo.email;
        this.isAdmin = userInfo.isAdmin;
    }
}

interface IUser
{
    id: string;
    username: string;
    name: string;
    createdOn: Date;
    updatedOn: Date;
    organizationId: string;
    email: string;
    isAdmin: boolean;
}