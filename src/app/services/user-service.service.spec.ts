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
});
