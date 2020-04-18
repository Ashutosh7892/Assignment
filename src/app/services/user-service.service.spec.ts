import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
//import { Observable } from 'rxjs/Observable'
import { UserService } from './user-service.service';

describe('UserService', () => {
  // let userService: UserService,
  // mockService = {
  //   createUser: jasmine.createSpy('createUser').and.returnValue(Observable.of('your session object mock goes here'))
  // };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });
 /* //const userService = TestBed.get(UserService);
  it('should be created', () => {
    
    expect(userService).toBeTruthy();
  });

  beforeEach(inject([UserService], (userService) => {
    mockService = userService;
  }));

  describe('createUser', () => {
    it('create user ', () => {
      let fakeResponse = null;

      // Call the service function and subscribe to it to catch the fake response coming from the mock.
      mockService.createUser().subscribe((value) => {
        // in here value will be whatever you put as returnValue (remember to keep the observable.of())
        fakeResponse = value;
      });

      // expects as in any test.
      expect(fakeResponse).toBeDefined();
      expect(fakeResponse).toBe('your session object mock goes here');
    });
  });*/
});
