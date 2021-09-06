import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {QuotesComponent} from './components/quotes/Quotes.component';
import {AppRoutingModule} from './app-routing.module';
import {DefaultPipe} from './pipes/default/default.pipe';
import {LoginComponent} from './01 - Testing with Mocks & Spies/login/login.component';
import {Login2Component} from './02 - Angular Test Bed/login2/login2.component';
import {Login3Component} from './03 - Testing Change Detection/login3/login3.component';
import {Login4Component} from './04 - Testing Asynchronous Code/login4/login4.component';
import {Login5Component} from './05 - Testing Dependency Injection/login5/login5.component';
import {Login6Component} from './06 - Testing Components/login6/login6.component';
import {Login7Component} from './08 - Testing Model Driven Forms/login7/login7.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {ReversePipe} from './pipes/reversePipe/reverse-value.pipe';
import {UserAsyncComponent} from './components/user-async/user-async.component';
import {UserComponent} from './components/user/user.component';
import {LoggingInterceptor} from './service/loggingInterceptor.service';
import {AuthInterceptor} from './service/authInterceptor.service';
import {ContactComponent} from './components/contact/contact.component';
import {HoverFocusDirective} from './directives/hoverfocus.directive';
import {BannerComponent} from './00-02-Component Testing/banner/banner.component';
import {TitleCasePipe} from './00-00-Testing Pipes/title-case.pipe';
import {BannerInitialComponent} from './00-02-Component Testing/banner/banner-initial.component';
import {BannerExternalComponent} from './00-02-Component Testing/banner/banner-external.component';
import {LightSwitchComponent} from './00-02-Component Testing/light-switch/light-switch.component';
import {TwainComponent} from './00-02-Component Testing/twain/twain.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    EmployeeComponent,
    ReversePipe,
    DefaultPipe,
    LoginComponent,
    Login2Component,
    Login3Component,
    Login4Component,
    Login5Component,
    Login6Component,
    Login7Component,
    ContactComponent,
    UserComponent,
    UserAsyncComponent,
    QuotesComponent,
    LightSwitchComponent,
    HoverFocusDirective,


    TitleCasePipe,

    BannerInitialComponent,
    BannerExternalComponent,
    BannerComponent,
    TwainComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
