import { Component, OnInit } from '@angular/core';
import {IMenuItem} from './menuitem';
import {MenuService} from './menu.service';

@Component({
  selector: 'er-menu',
  templateUrl: './er-menu.component.html',
  styleUrls: ['./er-menu.component.css']
})
export class ErMenuComponent implements OnInit {

  
  menuItems: IMenuItem[];
  errorMessage :string;

  ngOnInit(): void {
  
    this._menuitemService.getMenuItems()
        .subscribe(data => this.menuItems = data,
                  error => this.errorMessage=<any>error);


  }

   constructor(private _menuitemService: MenuService) { }


}
