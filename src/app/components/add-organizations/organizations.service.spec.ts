import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { inject, TestBed } from "@angular/core/testing";
import { OrganizationsService } from "./organizations.service";

describe("Organization Service", () => {
    let httpTestingController: HttpTestingController;
    let organizationsService: OrganizationsService;

    const OrganizationServiceStub = {
        getOrganizations: () => null
      };
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
  
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    beforeEach(inject(
      [OrganizationsService],
      (service: OrganizationsService) => {
        organizationsService = service;
      }
    ));
  
    it("should be created", () => {
      expect(organizationsService).toBeTruthy();
    });

    it('getOrganizations should call the organizationsService getOrganizations function', () => {    
        spyOn(organizationsService, 'getOrganizations');
        organizationsService.getOrganizations();
        expect(organizationsService.getOrganizations).toHaveBeenCalled();
      });

    // it("should return data", () => {
    //     let users: User[];
    //     let result = usersService.getUsers();
    //     users = JSON.parse(JSON.stringify(result));
    //     const req = httpTestingController.expectOne({
    //       method: "GET",
    //       url: baseUrl
    //     });
    
    //     req.flush([result]);
    
    //     expect(users[0]).toEqual(user);
    //   });
});