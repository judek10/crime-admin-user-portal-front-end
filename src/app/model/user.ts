export class User {
    email : string;
    id : string;
    isAdmin : boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
