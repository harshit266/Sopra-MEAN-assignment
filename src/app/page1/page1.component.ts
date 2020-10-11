import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { PersistenceService } from 'angular-persistence';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private router : Router ) {
    // persistenceService.set('myName', 'scott');

   }

  ngOnInit() {
  }
  saveValue(f){
    const obj = {
      firstName: f.firstName,
      lastName:f.lastName,
      email:f.email,
      number:f.number
    };
    localStorage.setItem('obj', JSON.stringify(obj));
    // console.log(localStorage.getItem('dataSource'));
    console.log("courseVal :",f);
    // this.facultyService.addFaculty(facultyVal,this.facultyImage).subscribe(data => {
           this.router.navigate([`page2/`]);
    // });
  }
}
