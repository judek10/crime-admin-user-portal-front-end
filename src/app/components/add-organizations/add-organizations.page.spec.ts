import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, IonRow } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrganizationComponent } from './organization.component';
import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AddOrganizationsPage', () => {
  let component: OrganizationComponent;
  let fixture: ComponentFixture<OrganizationComponent>;
  let httpClient: HttpClient;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationComponent ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationComponent);
    httpClient = TestBed.inject(HttpClient);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be instance of organization Page', () => {
    expect(component instanceof OrganizationComponent).toBe(true);
  });

  it('should show the expected number of rows', () => {
    const fixture = TestBed.createComponent(OrganizationComponent);
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.directive(IonRow));
    expect(items).toBeDefined();
    expect(items.length - 1).toBe(component.organizations.length); // -1 because there's already an ion-row displayed for columns
  });

  // it('should show organizations after setting them', () => {
  //   component
  //   expect(component.organizations).toBeInstanceOf(Array);
  // });
  
});
