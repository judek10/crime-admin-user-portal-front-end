import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';
import { Key } from 'protractor';

@Component({
  selector: 'app-add-organizations',
  templateUrl: './add-organizations.page.html',
  styleUrls: ['./add-organizations.page.scss'],
  
}
)
export class AddOrganizationsPage implements OnInit {
  
  organizationText:string;
  organizationID:any;
  organizations:any[]=[];
  key:any;

  constructor(private http:HttpClient) {

   }
   

  submit(){ 
    let data = { Name: this.organizationText, ID: this.organizationID};
    localStorage.setItem('key',JSON.stringify(data));
    console.log(this.organizationText, this.organizationID);
    this.organizationText = '';
    this.organizationID = '';
    this.organizations.push([this.organizationID, this.organizationText]);
  }
  load(){
    let data: any= localStorage.getItem('key');
    this.key = JSON.stringify(data);
    alert(data);
  }

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
