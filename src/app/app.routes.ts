import { Routes } from '@angular/router';
import { MainLayoutComponent } from './features/layout/main-layout/main-layout.component';
import { Register } from './features/auth/register/register';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/singUn',
  },
  {
    path: 'singUp',
    loadComponent: () => import('./features/auth/register/register').then((c) => c.Register),
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'patients',
        loadChildren: () =>
          import('./features/patients/patients.module').then((m) => m.PatientsModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/singUp',
  },
];
