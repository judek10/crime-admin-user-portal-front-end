import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { UsersPage } from './users.component';

describe('Users Page', () => {
  let component: UsersPage;
  let fixture: ComponentFixture<UsersPage>;
  let router : Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UsersPage],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be instance of users page', () => {
    expect(component instanceof UsersPage).toBe(true);
  });

  // it('should redirect to god-mode page', fakeAsync(() => {
  //   // router = TestBed.inject(Router);
  //   // router.navigate(["/god-mode-page"]).then(() => {
  //   //   expect(location.pathname).toBe("/god-mode-page");
  //   // });
  //   spyOn(component.router, 'navigate').and.returnValue(true);
  // }));

});