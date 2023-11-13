import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExServices } from '../services/ex-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-curreny-details',
  templateUrl: './curreny-details.component.html',
  styleUrls: ['./curreny-details.component.scss']
})
export class CurrenyDetailsComponent {
  value: number = 1;
  rate?: number;
  selectedMonth: number = 1;
  fromValue?: string;
  toValue?: string;
  ratesDate?: any;
  rateNames?: string[];
  result?: number | string;
  base: number = 0;
  months: string[] = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  constructor(private router: Router, private currencyService: ExServices, private toast: ToastrService) { }

  ngOnInit() {
    this.currencyService.getRates()
      .subscribe(r => {

        this.ratesDate = r.rates;
        this.rateNames = Object.keys(r.rates);
        this.fromValue = "EUR";
        this.toValue = "USD";
        this.base = this.ratesDate["EUR"];
      }

      )
    // this.currencyService.getHistoricalRates(`2023-1-30`, "EUR", "USD")
    //   .subscribe(r => console.log(r))
  }
  convert = () => {
    let from = this.base / this.ratesDate[`${this.fromValue}`];
    let to = this.base / this.ratesDate[`${this.toValue}`]
    this.result = this.value * from / to;
  }
  swap = () => {
    let oldFrom = this.fromValue;
    let oldTo = this.toValue;
    this.fromValue = oldTo;
    this.toValue = oldFrom;
    this.value ? this.convert() : this.result = "";
  }
  getHistorical = (index: number,) => {
    let mm, dd;
    index == 2 ? dd = 28 : dd = 30
    index < 10 ? mm = "0" + index : mm = index;
    let zeft = this.fromValue || "EUR";
    let to = this.toValue || "USD";
    this.currencyService.getHistoricalRates(`2023-${mm}-28`, zeft, to)
      .subscribe(r => {
        if (r.success === false) {
          this.toast.error((r as any).error.type )
        }else{
          this.rate = r.rates[to]
        }
       
        
      })
  }

  redirect = () => {
    this.router.navigate([""])
  }
}
