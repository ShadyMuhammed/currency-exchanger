import { Component ,OnInit } from '@angular/core';
import { ExServices } from '../ex-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit{
  value:string = '';

  constructor(private currencyService:ExServices){

  }
  ngOnInit(){
    // console.log("rr")
    this.currencyService.getRates()
    .subscribe(r => console.log(r.rates))
  }
 
}


