import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class OrganizationsService{
    
    constructor(private httpClient: HttpClient){}

    getOrganizations(){
        return new Promise(resolve=>{
         this.httpClient.get<any>('http://localhost:3000/organizations').pipe()
             .subscribe(
                (data:any) => {
                    resolve(data);
             })
        })
     }
}


