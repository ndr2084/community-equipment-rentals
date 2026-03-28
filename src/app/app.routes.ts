import { Routes } from '@angular/router';
import {AboutPage} from './page/about-page/about-page';
import {LoginPage} from './page/login-page/login-page';
import { ServicePage } from './page/service-page/service-page';

export const routes: Routes = [
  {
    path: 'service-page',
    component: AboutPage,
  },

  { path: 'login-page',
    component: LoginPage,
  },

  { path: 'service-page',
    component: ServicePage,
  }
];
