export interface ICountry {

    countryKey: number;
    countryCode: string;
    countryDescription: string;

}

export class Country implements ICountry {


    constructor (
                    public countryKey : number,
                    public countryCode: string,
                    public countryDescription: string
                ) {};

}