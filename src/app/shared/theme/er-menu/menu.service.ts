import {Injectable}  from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IMenuItem} from './menuitem';

@Injectable()
export class MenuService {

  public headers: Headers;
  private _menuItemUrl = 'http://localhost:8080/api/config/menuitemslevel1';

  constructor(private _http: Http) { 

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

  }

    getMenuItems() : Observable<IMenuItem[]>{
        return this._http.get(this._menuItemUrl)
                .map((r :Response) => <IMenuItem[]>r.json())
                .catch(this.handleError);

    }

    private handleError(error: Response){

        console.error(error);
        return Observable.throw(error.json() || 'Server error');

    }

}
