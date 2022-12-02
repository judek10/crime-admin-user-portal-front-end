import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { UsersComponent } from './users.component';

describe('Users Page', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let router : Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be instance of users page', () => {
    expect(component instanceof UsersComponent).toBe(true);
  });

  // it('should redirect to god-mode page', fakeAsync(() => {
  //   // router = TestBed.inject(Router);
  //   // router.navigate(["/god-mode-page"]).then(() => {
  //   //   expect(location.pathname).toBe("/god-mode-page");
  //   // });
  //   spyOn(component.router, 'navigate').and.returnValue(true);
  // }));

});