import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-add-organizations',
  templateUrl: './add-organizations.page.html',
  styleUrls: ['./add-organizations.page.scss'],
})
export class AddOrganizationsPage implements OnInit {

  organizations : any[] =
  [[3,"289af03e-89ca-452e-bf7e-6d9564f57495","Chuqlab","2021-04-06 23:17:28.93313","2021-04-06 23:17:28.93313"],
  [10,"5bfe9d22-0f5f-483e-ae3e-74db8db0d883","McDonalds","2021-05-18 17:56:48.629366","2021-05-18 17:56:48.629366"],
  [11,"60f445d1-6efd-4cc6-b262-bad449bf12e7","Indianapolis Police Department","2021-05-18 17:56:48.629366","2021-05-18 17:56:48.629366"],
  [12,"94f0f4db-7f4f-450b-ba44-ea63d4fc3189","State Farm","2021-05-18 17:56:48.629366","2021-05-18 17:56:48.629366"]];

  constructor() { }

  ngOnInit() {

  }

}
