import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/model/organization';
import { OrganizationsService } from './organizations.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-add-organizations',
  templateUrl: './organization.component.html',
  styleUrls: ['./add-organizations.page.scss'],
  
}
)
export class OrganizationComponent implements OnInit {
  
  organizationName:string;
  organizationID:any;

  organizations$: any[];

  //this calls the component to display the data from backend
  constructor(private organizationsService: OrganizationsService, private httpClient: HttpClient) {}
  
  //send POST request to BACK-END
  submit(organizationName: String){ 
      this.httpClient.post('http://localhost:3000/organizations', {name: organizationName})
          .subscribe(
             (data:any) => {
                 this.organizations$.push(data);
          })}

  //GET organizations
    async ngOnInit(): Promise<void> {
      var organizations = await this.organizationsService.getOrganizations();
      this.organizations$ = JSON.parse(JSON.stringify(organizations));
  } 
}
