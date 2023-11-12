import { Component, OnInit } from '@angular/core';
import { ExServices } from '../ex-service.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  value: number = 0;
  fromValue?: string ;
  toValue?: string ;
  ratesDate? : any;
  rateNames? : string[];
  result?:number | string;
  base: number = 0; 


  constructor(private currencyService: ExServices) {

  }
  ngOnInit() {
    this.currencyService.getRates()
      .subscribe(r =>  {
        
        this.ratesDate = r.rates;
        this.rateNames = Object.keys(r.rates);
        this.fromValue = "EUR";
        this.toValue = "USD";
        this.base = this.ratesDate["EUR"];

      }
        
        )
  }

  convert = () => {
    let from = this.base / this.ratesDate[`${this.fromValue}`];
    let to = this.base / this.ratesDate[`${this.toValue}`]
    this.result = this.value * from / to;  

  }
  swap = () =>{
    let oldFrom = this.fromValue;
    let oldTo = this.toValue;
    this.fromValue = oldTo;
    this.toValue = oldFrom;
    this.value ? this.convert() : "";
  }
}


