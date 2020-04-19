import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { of } from 'rxjs';

describe('UserService', () => {
  
  let httpClientSpy: { get: jasmine.Spy,post: jasmine.Spy };
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });
  
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post']);
    userService = new UserService(<any> httpClientSpy);
  });
  
  it('should return expected users (HttpClient called once)', () => {
    const expectedUsers = {
      "page": 2,
      "per_page": 6,
      "total": 12,
      "total_pages": 2,
      "data": [{
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
      }, {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
      }]
    };
  
    httpClientSpy.get.and.returnValue(of(expectedUsers));
  
    userService.getUsers(1).subscribe(
      users => expect(users).toEqual(expectedUsers)
    );
  });


  it('should save user (HttpClient called)', () => {
    const user = {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
      }
  
    httpClientSpy.post.and.returnValue(of(user));
  
    userService.createUser(user).subscribe(
      users => expect(users).toEqual(user)
    );
  });
});
