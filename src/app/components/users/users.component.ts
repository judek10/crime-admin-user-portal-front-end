import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsersService } from './users.service';
import { HttpClient } from "@angular/common/http";
import { OrganizationsService } from '../add-organizations/organizations.service';




@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.page.scss']
})
export class UsersComponent implements OnInit {
  
  userEmail:string;
  username: string;
  isAdmin:boolean = false;
  users: any[];

  organization:string;
  organizations: any[];
  currentOrganizationId: string;

  constructor(private usersService: UsersService, private httpClient: HttpClient, private organizationsService:OrganizationsService) {}
 
  //send POST request to BACK-END for User creation
  submit(userEmail: string, isAdmin: boolean, username: string, organizationId: string){ 
    this.usersService.createUser({"email": userEmail, "is_admin": isAdmin, "username": username, "organization_api_id": organizationId })
    .then(data => {
      this.users.push(data);
      this.userEmail = '';
      this.username = '';
      this.isAdmin = false;
      this.organization = ''
    })
    
  }

  //this calls the component to display the data from backend for Users
    async ngOnInit(): Promise<void> {
      var users = await this.usersService.getUsers();
      this.users = JSON.parse(JSON.stringify(users));
      this.getOrganizations();
  } 
  //Delete users
  delete(user:User){
    var result = confirm('Are you sure you want to delete this user?');
    if (result){
      this.usersService.deleteUser(user.id);
      for(var i=0; i < this.users.length; i++) {
        if (this.users[i].id == user.id) {
          this.users.splice(i, 1);
        }
      }
    }
  }  
  //Get organizations to assign to a user
  async getOrganizations() {
    var organizations =  await this.organizationsService.getOrganizations();
    this.organizations = JSON.parse(JSON.stringify(organizations));
 }
 //hold apiID of organization to send to DB for referencing user to organization
  updateOrganization(value : any) {
    const org_id = value.detail;
    this.currentOrganizationId = org_id;
    
  }
  
  //get name of user's organization
  getUserOrganization(user_organization_api_id: string) : string {
    let userOrganizationName : string;
    for(var i=0; i < this.organizations.length; i++) {
      if (this.organizations[i].api_id == user_organization_api_id) {
        userOrganizationName = this.organizations[i].name;
      }
    }
    return userOrganizationName;
  }
  

}
