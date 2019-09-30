import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  leagues: Array<string> = [];
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

}