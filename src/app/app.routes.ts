import { Routes } from '@angular/router';
import {AboutPage} from './page/about-page/about-page';
import {LoginPage} from './page/login-page/login-page';
import { ServicePage } from './page/service-page/service-page';
import { BuyPage } from './page/service-page/buy-page/buy-page';
import { SellPage } from './page/service-page/sell-page/sell-page';
import { RequestPage } from './page/service-page/request-page/request-page';

export const routes: Routes = [
  {
    path: 'about-page',
    component: AboutPage,
  },

  { path: 'login-page',
    component: LoginPage,
  },

  { path: 'service-page',
    component: ServicePage,
    children: [
      {
        path: 'buy-page',
        component: BuyPage,
      },
      {
        path: 'sell-page',
        component: SellPage,
      },
      {
        path: 'request-page',
        component: RequestPage,
      },
    ]
  }
];
