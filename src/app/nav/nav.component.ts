import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'myNg7App'; //in typescript way we have to indicate the type of the instance and name it to be displayed

  constructor() { }

  ngOnInit() {
  }

}
