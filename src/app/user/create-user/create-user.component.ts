import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
    public submitted = false;
    private userData =  User;
    public userSaved = false;
    public showMessage = false;
    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService
    ) { 
        
    }
    ngOnInit() {
        this.createUserForm = this.formBuilder.group({
            first_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]/)]],
            last_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]/)]],
            email: ['', [Validators.required, Validators.pattern(/^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/)]]
        });
    }
    
    get f() { 
      return this.createUserForm.controls;
    }

    onSubmit() {
      this.submitted = true;
      // return if form is invalid
      if (this.createUserForm.invalid) {
          return;
      }
      this.userService.createUser(this.createUserForm.value).subscribe(
        result=>{
          this.userSaved = true;
          this.showMessage = true;
          this.submitted = false;
          this.createUserForm.reset();          
          setTimeout(() => {
            this.showMessage = false;
          }, 3000);

        },error=>{
            //TODO Error handling
        }
      )
      console.log("Form data",this.createUserForm.value);
    }

    public resetForm(){
      this.submitted = false;
      this.createUserForm.reset();
    }

}
