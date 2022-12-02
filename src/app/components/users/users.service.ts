import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/model/user";




@Injectable({
    providedIn: 'root'
})
export class UsersService{
    constructor(private httpClient: HttpClient){}

    getUsers() {
            this.httpClient.get<any>('http://localhost:3000/users').subscribe(data => {
            var users = data;
            console.log(users);
        })
        
    }
}