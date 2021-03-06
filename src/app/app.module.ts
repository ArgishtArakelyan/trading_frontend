import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CoreModule} from '@core/core.module';
import {ChannelsComponent} from './channels/channels.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {JwtModule} from '@auth0/angular-jwt';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from '@core/helpers/http.interceptor';
import {StockProfileComponent} from '@app/user/stock-profile/stock-profile.component';
import {DatePipe} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';

// Token getter for JWT module
export function tokenGetter() {
  return localStorage.getItem('token') || '';
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelsComponent,
    StockProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    CarouselModule,
    MatDialogModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:3001',],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    }),
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
