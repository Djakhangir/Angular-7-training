import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style:boolean =false; //Class Binding by default is false, meaning when page loads it won;t attached that class gray

  users:Object; //
  constructor(private data: DataService) { } //Dependency Injection and do not forget import the dataservice

  ngOnInit() {
    this.data.methodInService().subscribe(data=>{
      this.users = data
    })
  }


  //event and class binding
  firstClick(){ // method on click makes the home style class gray become true and then define the gray style in style file;
    this.h1Style = true;
  }


}
