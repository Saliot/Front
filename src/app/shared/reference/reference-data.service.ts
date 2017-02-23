import { Injectable } from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ICountry} from './country';
import {ICompany} from './company';
import 'rxjs/add/operator/filter';

@Injectable()
export class ReferenceDataService {

 private _companyUrl = 'http://localhost:8080/api/config/companies'
 private _countryUrl = 'http://localhost:8080/api/config/countries'

  constructor(private _http: Http) { }


  getCountries() : Observable<ICountry[]>{

        return this._http.get(this._countryUrl)
                .map((r :Response) => <ICountry[]>r.json())
                .catch(this.handleError);
  }


  getCompanies() : Observable<any[]>{
        return this._http.get(this._companyUrl)
                .map((r :Response) => <ICompany[]>r.json())
                .catch(this.handleError);

    }


private handleError(error: Response){

        console.error(error);
        return Observable.throw(error.json() || 'Server error');

    }



}
