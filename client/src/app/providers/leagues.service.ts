import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  leagues: Array<string> = [];
  private usersEndpoint: string = 'http://localhost:3000/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
  };

  constructor(private http: HttpClient) { }
  getLeagues(){
    return this.http.get('http://localhost:3000/leagues/data', this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  getTeamsForLeagues(teamName: string) : Observable<any>{
    return this.http.get(`${this.usersEndpoint}teams/data/${teamName}`,this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}