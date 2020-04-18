import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../../services/user-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let service: UserService;

  /*beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(()=>{
    service = new UserService(null);
    component = new UserListComponent(service);
  })

  it('Should set users property with items returned from the server',()=>{
    const users ={
      "page":2,
      "per_page":6,
      "total":12,
      "total_pages":2,
      "data":[{
          "id":7,
          "email":"michael.lawson@reqres.in",
          "first_name":"Michael",
          "last_name":"Lawson",
          "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },{
          "id":7,
          "email":"michael.lawson@reqres.in",
          "first_name":"Michael",
          "last_name":"Lawson",
          "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        }]
    }
    spyOn(service, 'getUsers').and.callFake((users)=>{
      return users;
    });

    // Act
    component.ngOnInit();

    // Assert
    expect(component.userData).toContain(users);
  })
  
});
