import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ExCurrency } from '../landing/models/ex.model';


@Injectable({
  providedIn: 'root'
})
export class ExServices {

  constructor(public http: HttpClient) { }

  public getRates(): Observable<ExCurrency> {
    return this.http.get<ExCurrency>(`http://data.fixer.io/api/latest?access_key=6bf5d15e6d9fe4c47ab26642b10f8bbb`)
      .pipe(map(r => r))
  }

}
