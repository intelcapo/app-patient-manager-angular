import { Routes } from '@angular/router';
import { MainLayoutComponent } from './features/layout/main-layout/main-layout.component';

export const routes: Routes = [
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
];
