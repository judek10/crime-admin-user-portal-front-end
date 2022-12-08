export class User {
    id?: string;
    username: string;
    email : string;
    is_admin : boolean;
    organization_api_id : string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
