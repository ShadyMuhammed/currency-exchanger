import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpEventType
} from '@angular/common/http';
import { Observable, catchError, finalize, map, tap } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.startLoading();
    return next.handle(request)
    .pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event.type == HttpEventType.Response) {
            this.loadingService.stopLoading()          }
        },
        (err) => {
          this.loadingService.stopLoading()        }
      )
    );
    // .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
    //   if (evt instanceof HttpResponse) {
    //     this.loadingService.stopLoading()
    //   }
    //   return evt;
    // }))
    //   .pipe(catchError((err) => {
    //     this.loadingService.stopLoading();
    //     return err;
    //   }))
    //   .pipe(finalize(()=>this.loadingService.stopLoading()));
      
    

  }
}
