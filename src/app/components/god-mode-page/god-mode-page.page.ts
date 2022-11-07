import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-god-mode-page',
  templateUrl: './god-mode-page.page.html',
  styleUrls: ['./god-mode-page.page.scss'],
})
export class GodModePagePage implements OnInit {

  records:any[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.loadDataFromCsvFile();
  }

  loadDataFromCsvFile() {
    this.http.get("/assets/users.csv", {responseType:"text"}).subscribe((datatemp)=>{
      let obj = Papa.parse(datatemp);
      let arr = obj.data;
      arr.splice(0,1);
      this.records = arr;
    })
  }

}
