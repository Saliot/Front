import { Injectable } from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IUser} from './user';

@Injectable()
export class RegistrationService {

  public headers: Headers;
  private _userUrl = 'http://localhost:8080/api/register/user';


  constructor(private _http: Http) { 

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

  }

    addUser(body: Object): Observable<IUser[]>{

        return this._http.post(this._userUrl, body)
                   .map((r :Response) => <IUser[]>r.json())
                   .catch(this.handleError);

    }

   


    private handleError(error: Response){

        console.error(error);
        return Observable.throw(error.json() || 'Server error');

    }

}
