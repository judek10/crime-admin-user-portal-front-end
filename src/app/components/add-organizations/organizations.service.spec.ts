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
});