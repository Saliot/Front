import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'er-navbar',
  templateUrl: './er-navbar.component.html',
  styleUrls: ['./er-navbar.component.css']
})
export class ErNavbarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    console.log('Hello');
    //this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}
