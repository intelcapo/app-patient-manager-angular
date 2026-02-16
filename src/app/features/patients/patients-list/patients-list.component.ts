import { Component, inject, OnInit } from '@angular/core';
import { PatientItemListComponent } from '../patient-item-list/patient-item-list.component';
import { PatientsService } from '../services/patients.service';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-patients-list',
  imports: [PatientItemListComponent],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.scss',
})
export class PatientsListComponent implements OnInit {
  private patientService = inject(PatientsService);

  patientList: Patient[] = [];

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe({
      next: (patientsData)=>{
        this.patientList = patientsData
      }
    })  
  }
}
