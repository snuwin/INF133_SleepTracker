import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'log-overnight',
    loadComponent: () => 
      import('./log-overnight/log-overnight.page').then( m => m.LogOvernightPage)
  },
  {
    path: 'day-log',
    loadComponent: () => import('./day-log/day-log.page').then( m => m.DayLogPage)
  },
  {
    path: 'view-data',
    loadComponent: () => import('./view-data/view-data.page').then( m => m.ViewDataPage)
  },
];
