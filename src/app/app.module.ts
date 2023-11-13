import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ExServices } from './services/ex-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { LoadingInterceptor } from './utilities/loading/loading.interceptor';
import { LoadingService } from './services/loading.service';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { CurrenyDetailsComponent } from './curreny-details/curreny-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    CurrenyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    NgxUiLoaderModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,

  ],
  providers: [
    ExServices,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
