export interface ICompany {

    companyKey: number;
    companyCode: string;
    companyDescription: string;
    countryKey: number;

}

export class Company implements ICompany {


    constructor (
                    public companyKey : number,
                    public companyCode: string,
                    public companyDescription: string,
                    public countryKey: number
                ) {};

}