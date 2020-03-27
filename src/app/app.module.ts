import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//Application
import { HttpHandleErrorService } from './shared/_services/http-handle-error.service';
import { AppHttpInterceptorService } from './shared/_services/http-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './pages/auth/auth.module';
import { NavComponent } from './layout/nav/nav.component';
import { CenterModule } from './pages/center/center.module';
import { LeftComponent } from './layout/left/left.component';
import { RightComponent } from './layout/right/right.component';
import { CharchooseComponent } from './layout/charchoose/charchoose.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeftComponent,
    RightComponent,
    CharchooseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    CenterModule,
    AuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    Title,
    HttpHandleErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
