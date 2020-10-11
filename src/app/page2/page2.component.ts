import { Component, OnInit } from '@angular/core';
import {Page2Service} from './page2.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private Page2Service:Page2Service) { }

  ngOnInit() {
  }
  saveData(form){
    console.log("courseVal :",form);
    var obj=JSON.parse(localStorage.getItem('obj'));
    // console.log('retrievedObject: ', JSON.parse(localStorage.getItem('obj')));

    this.Page2Service.add(form , obj);
  }
}
