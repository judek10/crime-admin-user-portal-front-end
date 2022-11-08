import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { GodModePagePage } from '../god-mode-page/god-mode-page.page';

import { LoginPage } from './login.page';

describe('Login Page', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router : Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be instance of login page', () => {
    expect(component instanceof LoginPage).toBe(true);
  });

  // it('should redirect to god-mode page', fakeAsync(() => {
  //   // router = TestBed.inject(Router);
  //   // router.navigate(["/god-mode-page"]).then(() => {
  //   //   expect(location.pathname).toBe("/god-mode-page");
  //   // });
  //   spyOn(component.router, 'navigate').and.returnValue(true);
  // }));

});
