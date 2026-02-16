import { Component } from '@angular/core';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientItemListComponent } from './patient-item-list/patient-item-list.component';

@Component({
  selector: 'app-patients',
  imports: [PatientsListComponent],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent {}
