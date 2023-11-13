import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curreny-details',
  templateUrl: './curreny-details.component.html',
  styleUrls: ['./curreny-details.component.scss']
})
export class CurrenyDetailsComponent {

constructor(private _router:Router){}

  redirect = () =>{
    this._router.navigate([""])
  }
}
