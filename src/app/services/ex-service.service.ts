import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ExCurrency } from '../landing/models/ex.model';
import { HistoricalRates } from '../curreny-details/models/historical-rate.model';


@Injectable({
  providedIn: 'root'
})
export class ExServices {

  constructor(public http: HttpClient) { }

  public getRates(): Observable<ExCurrency> {
    return this.http.get<ExCurrency>(`http://data.fixer.io/api/latest?access_key=6bf5d15e6d9fe4c47ab26642b10f8bbb`)
      .pipe(map(r => r))
  }
  public getHistoricalRates(date:string,base:string,symbols:string): Observable<HistoricalRates> {
    return this.http.get<HistoricalRates>(`http://data.fixer.io/api/${date}?base=${base}&symbols=${symbols},&access_key=6bf5d15e6d9fe4c47ab26642b10f8bbb&`)
      .pipe(map(r => r))
  }

}
