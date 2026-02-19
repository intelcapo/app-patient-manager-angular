import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { PatientForm } from './patient-form/patient-form';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
  },
  {
    path: 'new',
    component: PatientForm,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
