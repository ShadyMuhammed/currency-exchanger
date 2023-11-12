import { Component, OnInit } from '@angular/core';
import { ExServices } from '../ex-service.service';
import { CurrencyNames } from './models/currencyNames.model';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  value: number = 0;
  fromValue?: string;
  toValue?: string;
  ratesDate?: any;
  rateNames?: string[];
  result?: number | string;
  base: number = 0;
  mostPopular: Array<CurrencyNames> = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Pound sterling' },
    { code: 'CAD', name: "Canadian Dollar" },
    { code: 'AUD', name: "Australian Dollar" },
    { code: 'CHF', name: "Swiss Franc" },
    { code: 'NZD', name: "New Zealand Dollar" },
    { code: 'CNY', name: "Chinese Yuan" },
    { code: 'HKD', name: "Hong Kong Dollar" }

  ]


  constructor(private currencyService: ExServices) {

  }
  ngOnInit() {
    this.currencyService.getRates()
      .subscribe(r => {

        this.ratesDate = r.rates;
        this.rateNames = Object.keys(r.rates);
        this.fromValue = "EUR";
        this.toValue = "USD";
        this.base = this.ratesDate["EUR"];
        this.getMostPopular();
      }

      )
  }

  convert = () => {
    let from = this.base / this.ratesDate[`${this.fromValue}`];
    let to = this.base / this.ratesDate[`${this.toValue}`]
    this.result = this.value * from / to;
    this.getMostPopular();
  }
  swap = () => {
    let oldFrom = this.fromValue;
    let oldTo = this.toValue;
    this.fromValue = oldTo;
    this.toValue = oldFrom;
    this.value ? this.convert() : this.result = "";
    this.getMostPopular();
  }
  getMostPopular = (resetResult?:boolean) => {
    this.mostPopular = this.mostPopular.map(c => {
      c.rate = this.ratesDate[c.code];
      c.equals = (this.base / (this.base / this.ratesDate[`${this.fromValue}`])) / (this.base / this.ratesDate[c.code])
      return c
    })
    resetResult ? this.result = '':''
    // console.log(rates)


  }
}


