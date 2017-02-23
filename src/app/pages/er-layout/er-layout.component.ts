import { Component, OnInit,trigger, state, style, transition, animate, Input } from '@angular/core';

@Component({
  selector: 'er-layout',
  templateUrl: './er-layout.component.html',
  styleUrls: ['./er-layout.component.css'],
   animations: [
      trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in <=> out', animate('400ms ease-in-out'))
    ]),
  ]
})
export class ErLayoutComponent implements OnInit {

  @Input() menuState:string = 'in';

  constructor() { }

  ngOnInit() {
  }

}
