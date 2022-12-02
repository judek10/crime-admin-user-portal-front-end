import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsersService } from './users.service';



@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.page.scss']
})
export class UsersComponent implements OnInit {
  
  // userID:string;
  // userEmail:string;
  // isAdmin:boolean = false;

  // users : User[] = [{id:"123", email:"jaking2@bsu.edu", isAdmin:true},
  //                   {id:"456", email:"someadminemail@bsu.edu", isAdmin:true},
  //                   {id:"789", email:"someuseremail@bsu.edu", isAdmin:false}];

  // constructor() {
  //   localStorage.setItem('users', JSON.stringify(this.users));
  // }

  // submit(){ 
  //   let user = new User(this.userID, this.userEmail, this.isAdmin);
  //   this.users.push(user);
  //   localStorage.setItem('users', JSON.stringify(this.users));
  //   this.userID = '';
  //   this.userEmail = '';
  //   this.isAdmin = false;
  // }

  // deleteUser(deletedUser : User) {
  //   const indexOfUser = this.users.findIndex(user => {
  //     return user.id == deletedUser.id;
  //   });
  //   console.log(indexOfUser);
  //   this.users.splice(indexOfUser, 1);
  //   localStorage.setItem('users', JSON.stringify(this.users));
  // }
  users$: Observable<any>;

  constructor(private usersService: UsersService) {}
  
  ngOnInit(): void{
      this.usersService.getUsers();
  }

}
