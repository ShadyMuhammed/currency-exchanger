import { Component ,OnInit } from '@angular/core';
import { ExServiceService } from '../ex-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit{
  value:string = '';
  constructor(private ser:ExServiceService){

  }
  ngOnInit(){
    // console.log("rr")
    this.ser.getDate().subscribe()
  }
 
}


