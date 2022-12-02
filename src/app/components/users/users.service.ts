import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UsersService{
    constructor(private httpClient: HttpClient){}
    getUsers(){
        return new Promise(resolve=>{
            this.httpClient.get<any>('http://localhost:3000/users').pipe()
             .subscribe(
                (data:any) => {
                    resolve(data);
             })
        })

    }
}


