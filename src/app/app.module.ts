import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InteriorPageComponent } from './components/interior-page/interior-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from '../app/shared/header/header.component';
import { JwtInterceptorInterceptor, ErrorInterceptorInterceptor, fakeBackendProvider } from './helpers';
import { FooterComponent } from './shared/footer/footer.component';
import { ToggleComponent } from './shared/toggle/toggle.component';
import { CardComponent } from './shared/card/card.component';
import { ButtonComponent } from './shared/button/button.component';
import { HelloElement } from './hello-element';
import { ModalComponent } from './shared/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InteriorPageComponent,
    LoginComponent,
    RegisterComponent,
    LoginUserComponent,
    HeaderComponent,
    ToggleComponent,
    FooterComponent,
    CardComponent,
    ButtonComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      appModel: appReducer,
    }),
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
