import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-add-organizations',
  templateUrl: './add-organizations.page.html',
  styleUrls: ['./add-organizations.page.scss'],
})
export class AddOrganizationsPage implements OnInit {

  organizations:any[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.loadDataFromCsvFile();
  }

  loadDataFromCsvFile() {
    this.http.get("/assets/organizations.csv", {responseType:"text"}).subscribe((datatemp)=>{
      let obj = Papa.parse(datatemp);
      let arr = obj.data;
      arr.splice(0,1);
      this.organizations = arr;
      console.log(this.organizations);
    })
  }

}
