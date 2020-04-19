import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = environment.baseUrl;
  constructor(public httpClient:HttpClient) { }

  /**
   * GET: Fetch Users from server
   */
  public getUsers(pageNumber):Observable<object>{
    return this.httpClient.get(this.baseUrl+'users?page='+pageNumber)
    .pipe(
      tap(users => this.log(`fetched users`)),
      catchError(this.handeError("Fetch Users Error"))
    ) as Observable<object>;
  }

   /**
   *  POST: add a new user to the server
   */
  public createUser(userData):Observable<User>{
    return this.httpClient.post(this.baseUrl+'users',userData)
    .pipe(
      tap((userAdded) => this.log(`User Added`)),
      catchError(this.handeError("Create User Error"))
    )as Observable<User>
  }

  /**
   * Error Handler
   */
  private handeError(error){
    //TODO Handle Error
    return error;
  }

  private log(message: string) {
    console.log('UserService: ' + message);
  }
}