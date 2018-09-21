import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from '../cookie.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
//import { writeFileSync } from 'fs';

@Component({
  selector: 'app-home',
  template: `<h3>Home {{ message |json}}</h3>`
})
export class HomeComponent implements OnInit {
  public message: any;

  constructor(private httpClient: HttpClient, private cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object) {
  }

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('isPlatformBrowser');
      var token = 'some_token';
      var d = new Date();
      d.setTime(d.getTime() + (100*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie =  "token=" + token + ";" + expires + ";path=/";


    }
    if (isPlatformServer(this.platformId)) {
      console.log('isPlatformServer');
      console.log('token',this.cookieService.get('token'));
      this.cookieService.get('token');
    }
    var lstoken;

    this.httpClient.get('https://reqres.in/api/users?delay=3').subscribe(result => {
      this.message = JSON.stringify(result);
    });
  }
}
