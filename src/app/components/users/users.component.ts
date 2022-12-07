import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsersService } from './users.service';
import { HttpClient } from "@angular/common/http";




@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.page.scss']
})
export class UsersComponent implements OnInit {
  
  userEmail:string;
  username: string;
  isAdmin:boolean = false;
  users$: any[];

  constructor(private usersService: UsersService, private httpClient: HttpClient ) {}
 
  //send POST request to BACK-END
  submit(userEmail:String, isAdmin:Boolean, username: String){ 
    this.httpClient.post('http://localhost:3000/users/create', {"email": userEmail, "is_admin": isAdmin, "username": username})
          .subscribe(
             (data:any) => {
                 this.users$.push(data);
          })
          this.userEmail = '';
          this.username = '';
          this.isAdmin = false;
        }

  //this calls the component to display the data from backend
    async ngOnInit(): Promise<void> {
      var users = await this.usersService.getUsers();
      this.users$ = JSON.parse(JSON.stringify(users));
  } 
  delete(user:User){
    var result = confirm('Are you sure you want to delete this user?');
    if (result){
    this.httpClient.delete('http://localhost:3000/users/'+user.id.toString()+'/delete')
          .subscribe(
             (data:any) => {
              for(var i=0; i < this.users$.length; i++) {
                if (this.users$[i].id == user.id) {
                  this.users$.splice(i);
                }
              }
          }
          )
        }
  }  
}
