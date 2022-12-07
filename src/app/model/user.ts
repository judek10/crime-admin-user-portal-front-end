export class User {
    id?: string;
    username: string;
    email : string;
    is_admin : boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
