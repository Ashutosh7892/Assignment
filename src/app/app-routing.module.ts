import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserListComponent } from './user/user-list/user-list.component';


const routes: Routes = [
  {path: '', component: CreateUserComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'user-list', component: UserListComponent},

  // otherwise redirect to
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
