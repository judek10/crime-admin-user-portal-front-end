import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { inject, TestBed } from "@angular/core/testing";
import { User } from "src/app/model/user";
import { UsersService } from "./users.service";

describe("Users Service", () => {
    let httpTestingController: HttpTestingController;
    let usersService: UsersService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
  
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    beforeEach(inject(
      [UsersService],
      (service: UsersService) => {
        usersService = service;
      }
    ));
  
    it("should be created", () => {
      expect(usersService).toBeTruthy();
    });

    it('getUsers should call the usersService getUsers function', () => {    
        spyOn(usersService, 'getUsers');
        usersService.getUsers();
        expect(usersService.getUsers).toHaveBeenCalled();
    });

    // it('createUser should call the usersService createUser function', () => {
    //     const testUser : User = {
    //         username: "user1",
    //         email: "email1",
    //         is_admin: true
    //     }
    //     spyOn(usersService, 'getUsers');
    //     usersService.getUsers();
    //     expect(usersService.getUsers).toHaveBeenCalled();
    //   });
});