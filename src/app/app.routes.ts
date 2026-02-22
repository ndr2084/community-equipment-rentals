import { Routes } from '@angular/router';
import {HomePage} from './page/home-page/home-page';
import {Login} from './page/login-page/login';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },

  { path: 'login',
    component: Login,
  }
];
