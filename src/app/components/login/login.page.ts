import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  email:any;
  password:any;

  constructor(private router:Router) {}
  
  login(){
    if(this.email == 'admin@bsu.edu' && this.password == 'password'){
      this.router.navigate(['/god-mode-page']);
    }else{
      alert('Invalid login');
    }
    this.email = '';
    this.password = '';
  }

}
