import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { CreateUserComponent } from './create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let userService: UserService;

  const mockUser = {
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserComponent],
      imports: [ReactiveFormsModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('User should created', () => {
    spyOn(userService, 'createUser').and.returnValue(of(mockUser));
    component.createUserForm.setValue({
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson"
    })
    component.onSubmit();
    expect(component.userSaved).toBe(true);
  });

  it('Form should reset',()=>{
    const resetSpy = spyOn(component.createUserForm, 'reset');
    component.resetForm();
    expect(resetSpy).toHaveBeenCalled();
  })
  
});


