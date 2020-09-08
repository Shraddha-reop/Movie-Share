import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InteriorPageComponent } from './components/interior-page/interior-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginUserComponent } from './components/login-user/login-user.component';

const routes: Routes = [
  {
    path: '',
    component: InteriorPageComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'login-user',
        component: LoginUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
