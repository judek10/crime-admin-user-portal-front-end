import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/model/user";

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
             });
        });
    }

    deleteUser(id: string) {
        return new Promise(resolve=>{
            this.httpClient.delete('http://localhost:3000/users/' + id + '/delete').pipe()
            .subscribe((data:any) => {
                resolve(data);
         });
        });
    }

    createUser(user: User) {
        return new Promise(resolve=>{
            this.httpClient.post('http://localhost:3000/users/create', {"email": user.email, "is_admin": user.is_admin, "username": user.username,"organization_api_id": user.organization_api_id})
            .subscribe((data:any) => {
              resolve(data);
          });
        });
    }
    
}


