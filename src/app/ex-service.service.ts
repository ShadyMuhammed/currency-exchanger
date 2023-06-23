import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExServiceService {

  constructor(public http:HttpClient) { }
  
 public getDate() : Observable<any>{
  return this.http.get(`http://data.fixer.io/api/latest?access_key=6bf5d15e6d9fe4c47ab26642b10f8bbb`)
    .pipe(r =>r)
  }
  
}
