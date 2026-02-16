import { Component, inject, Input, OnInit } from '@angular/core';
import { PatientItemListComponent } from '../patient-item-list/patient-item-list.component';
import { PatientsService } from '../services/patients.service';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-patients-list',
  imports: [PatientItemListComponent],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.scss',
})
export class PatientsListComponent {
  @Input()
  patientList: Patient[] = [];
}
