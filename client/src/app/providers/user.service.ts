import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersEndpoint: string = 'http://localhost:3000/users/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
  };
  private authenticated: boolean = false;
  private isAdmin: boolean = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${this.usersEndpoint}login`, {username : username, password : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  register(username: string, email: string, password: string) {
    return this.http.post(`${this.usersEndpoint}register`, {username : username, email : email, password : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.usersEndpoint}delete/${userId}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  getUsers() {
    return this.http.get(`${this.usersEndpoint}admin/`, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  getUser(userId: number) : Observable<any> {
    return this.http.get(`${this.usersEndpoint}/${userId}`, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  editUsers(userId: number, email: string,): Observable<any>{
    return this.http.put(`${this.usersEndpoint}edit/${userId}`, {email : email},this.httpOptions )
    .pipe(map(res => <any[]>res));
  }

  setAuthStatus(isAuth: boolean): void {
    this.authenticated = isAuth;
  }

  getAuthStatus(): boolean {
    return this.authenticated
  }

  setAdminStatus(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }

  getIsAdminStatus(): boolean {
    return this.isAdmin;
  }
}
