import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module'
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPage } from './components/login/login.page';

describe('AppComponent', () => {

  let router : Router;

  beforeEach(waitForAsync(() => {
    

    TestBed.configureTestingModule({
      declarations: [AppComponent, LoginPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  
  // it('should load login component', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   router = TestBed.inject(Router);
  //   const navigateSpy = spyOn(router, 'navigate');
  //   app.goSomewhere();
  //   expect(navigateSpy).toHaveBeenCalledWith(['/']);
  // });
  

});
