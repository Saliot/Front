import { Component,Input, OnInit } from '@angular/core';
import {MenuItem} from '../../menuitem';

@Component({
  selector: 'er-menuitem',
  templateUrl: './er-menuitem.component.html',
  styleUrls: ['./er-menuitem.component.css']
})
export class ErMenuitemComponent implements OnInit {

  @Input() 
  menuItem: MenuItem;
  errorMessage :string;


    ngOnInit(): void {
  }

   constructor() { }

    public onToggleSubMenu($event,item) :void {
    
    this.menuItem.expanded=!this.menuItem.expanded;
    //console.log(item);

  }

}
