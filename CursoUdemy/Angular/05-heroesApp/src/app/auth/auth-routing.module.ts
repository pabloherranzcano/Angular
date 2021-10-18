import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Route = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegisterComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: []
})
export class AuthRoutingModule { }
