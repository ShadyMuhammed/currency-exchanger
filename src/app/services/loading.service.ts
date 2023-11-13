import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // public loading = new BehaviorSubject<boolean>(false);
  // public readonly loading$ = this.loading.asObservable(); 
  constructor(private ngxService: NgxUiLoaderService) { }

  startLoading() {
    this.ngxService.start();
  }

  stopLoading() {
    this.ngxService.stop();
  }
}
0