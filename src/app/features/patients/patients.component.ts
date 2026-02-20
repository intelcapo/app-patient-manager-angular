import { Component, inject, OnInit } from '@angular/core';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientItemListComponent } from './patient-item-list/patient-item-list.component';
import { PatientsFilter } from './patients-filter/patients-filter';
import { PatientFilterDTO } from './models/patient-filter.model';
import { PatientsService } from './services/patients.service';
import { Patient } from './models/patient.model';
import { BtnRounded } from '../../shared/ui/components/btn-rounded/btn-rounded';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

@Component({
  selector: 'app-patients',
  imports: [PatientsListComponent, PatientsFilter, BtnRounded, DashboardRoutingModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent implements OnInit {
  private patientService = inject(PatientsService);

  patientList: Patient[] = [];
  originalPatients: Patient[] = [];
  executedSessions: number = 0;

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe({
      next: (patientsData) => {
        this.originalPatients = patientsData;
        this.patientList = patientsData;
        this.calculateSessionsExecuted(this.patientList);
      },
    });
  }

  calculateSessionsExecuted(patientList: Patient[]) {
    const sessionsAmount = patientList.map((patient) => patient.sessions.length);
    this.executedSessions = sessionsAmount.reduce((acc, currentValue) => acc + currentValue);
  }

  filterPatients(data: PatientFilterDTO) {
    this.patientList = this.originalPatients;
    console.log(data);

    if (data.dataToSearch != null || data.status != null || data.city != null) {
      this.patientList = this.patientList.filter((patient) => {
        const matchData =
          !data.dataToSearch ||
          patient.name.toLowerCase().includes(data.dataToSearch.toLowerCase()) ||
          patient.lastName.toLowerCase().includes(data.dataToSearch.toLowerCase());

        const matchStatus =
          !data.status ||
          patient.status == (data.status.label.toLowerCase() == 'activo' ? true : false);

        const matchLocation =
          !data.city || patient.city?.toLowerCase() == data.city.label.toLowerCase();

        return matchData && matchStatus && matchLocation;
      });
    } else {
      this.patientList = this.originalPatients;
    }
  }
}
