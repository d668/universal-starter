import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  template: `<h3>Home {{ message |json}}</h3>`
})
export class HomeComponent implements OnInit {
  public message: any;

  constructor(private httpClient: HttpClient
  ) {

  }

  ngOnInit() {
    this.httpClient.get('https://reqres.in/api/users?delay=3').subscribe(result => {
      this.message = result;
    });

  }
}
