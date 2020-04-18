import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient:HttpClient) { }

  /**
   * Get User List
   */
  public getUsers(pageNumber){
    return this.httpClient.get(environment.baseUrl+'users?page='+pageNumber);
  }

   /**
   * Create User
   */
  public createUser(data){
    return this.httpClient.post(environment.baseUrl+'users',data);
  }
}
