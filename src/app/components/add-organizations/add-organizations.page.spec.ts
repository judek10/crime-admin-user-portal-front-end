import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, IonRow } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AddOrganizationsPage } from './add-organizations.page';
import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AddOrganizationsPage', () => {
  let component: AddOrganizationsPage;
  let fixture: ComponentFixture<AddOrganizationsPage>;
  let httpClient: HttpClient;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganizationsPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddOrganizationsPage);
    httpClient = TestBed.inject(HttpClient);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be instance of organization Page', () => {
    expect(component instanceof AddOrganizationsPage).toBe(true);
  });

  // it('should parse csv into array data type', () => {
  //   component.loadDataFromCsvFile();
  //   expect(component.organizations).toBeInstanceOf(Array);
  // });

  // it('should show the expected number of rows', () => {
  //   const fixture = TestBed.createComponent(AddOrganizationsPage);
  //   let reader = new CSVReader();
    
  //   fixture.detectChanges();
  //   const items = fixture.debugElement.queryAll(By.directive(IonRow));
  //   expect(items).toBeDefined();
  //   expect(items.length).toBe(reader.convertCsvToArray(httpClient).length);
  // });

  // it('should show organizations after setting them', () => {
  //   component
  //   expect(component.organizations).toBeInstanceOf(Array);
  // });
  
});
