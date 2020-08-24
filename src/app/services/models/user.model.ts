export interface UsersModel {
    id_user         : number;
    fname           : string;
    lname           : string;
    contact_email   : string;
    contact_phone   : string;
    contact_address : string;
    password        : string;
    events          : Array<number>;
} 