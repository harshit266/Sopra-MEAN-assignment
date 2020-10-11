import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Page2Service {
  uri="http://localhost:4000";
  constructor(private http: HttpClient) { }

  add(form , obj1) {
    // console.log("------------",form)
    const obj = {
      firstName:obj1.firstName,
      lastName:obj1.lastName,
      email:obj1.email,
      number:obj1.number,
      intrest:form.intrest,
      date:form.date
    };
    console.log(obj);
   this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
}
