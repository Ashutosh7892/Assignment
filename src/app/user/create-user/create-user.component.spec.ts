import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserComponent } from './create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../services/user-service.service';
import { Observable } from 'rxjs';
import { FormBuilder} from '@angular/forms';
import { By } from '@angular/platform-browser';

let component: CreateUserComponent;

let fixture: ComponentFixture<CreateUserComponent>;
let service: UserService;
let formBuilder: FormBuilder
describe('CreateUserComponent', () => {

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  beforeEach(()=>{
    service = new UserService(null);
    component = new CreateUserComponent(formBuilder,service);
  })
  it('should save user details when form is submitted', () => {
    const spy = spyOn(service, 'createUser').and.returnValue(null);

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);

    const button = fixture.debugElement.query(By.css('#save'));
    button.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

  it('Form should be empty',()=>{

    component.resetForm();
    expect(component.createUserForm.value).toHaveBeenCalled();
  })
  
});

