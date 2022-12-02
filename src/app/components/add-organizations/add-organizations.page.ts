import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/model/organization';
import { OrganizationsService } from './organizations.service';

@Component({
  selector: 'app-add-organizations',
  templateUrl: './add-organizations.page.html',
  styleUrls: ['./add-organizations.page.scss'],
  
}
)
export class AddOrganizationsPage implements OnInit {
  
  // organizationText:string;
  // organizationID:any;
  // organizations : Organization[] = [{name : "org1", id : "12345"}, {name : "org2", id : "678910"}];

  // constructor() {
  //   localStorage.setItem('organizations', JSON.stringify(this.organizations));
  //  }
   

  // submit(){ 
  //   let organization = new Organization(this.organizationText, this.organizationID);
  //   this.organizations.push(organization);
  //   localStorage.setItem('organizations', JSON.stringify(this.organizations));
  //   this.organizationText = '';
  //   this.organizationID = '';
    
  // }

  organanizations$: any;

  //this calls the component to display the data from backend
  constructor(private organizationsService: OrganizationsService) {}
  
    async ngOnInit(): Promise<void> {
      this.organanizations$ = await this.organizationsService.getOrganizations();
  } 
}
