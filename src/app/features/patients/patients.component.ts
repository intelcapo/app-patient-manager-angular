import { Component } from '@angular/core';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientItemListComponent } from './patient-item-list/patient-item-list.component';
import { PatientsFilter } from './patients-filter/patients-filter';

@Component({
  selector: 'app-patients',
  imports: [PatientsListComponent, PatientsFilter],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent {}
