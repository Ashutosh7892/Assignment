import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { CreateUserComponent } from './create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../services/user.service';
import { By } from '@angular/platform-browser';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let userService: UserService;

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
    fixture.detectChanges();
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    //spy  = spyOn(userService, 'createUser').and.returnValue(null);
    fixture.detectChanges();
  });

  it('should', fakeAsync( () => {
      fixture.detectChanges();
      const spy = spyOn(userService, 'createUser').and.callThrough();
      let btn = fixture.debugElement.query(By.css('#save'));
      btn.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(spy).toBe(true);
      //expect(spy.calls.any()).toBe(true, 'userService.createuser called');
  }));
  it('Form should reset',()=>{
    spyOn(component, 'resetForm');

    let button = fixture.debugElement.query(By.css('#reset')); 
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.createUserForm.value.first_name).toBe('');
  })
  
});


