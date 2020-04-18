import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user-service.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });
  const userService = TestBed.get(UserService);
  it('should be created', () => {
    
    expect(userService).toBeTruthy();
  });
  // Add tests for getUsers() method
  describe('getUsers', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
          first_name: 'Ashu',
          last_name: 'Ashu',
          email: 'ashu@test.com'
        },
        {
          first_name: 'Ashu',
          last_name: 'Ashu',
          email: 'ashu@test.com'
        }
      ];
      let response;

      userService.getUsers(1).subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });
});
