export interface IUser {

    userKey: number;
    firstName: string;
    lastName: string;
    email: string;
    companyKey: number;
   
}

export class User implements IUser {


    constructor (
                    public userKey : number,
                    public firstName: string,
                    public lastName: string,
                    public email: string,
                    public companyKey: number
                ) {};

}