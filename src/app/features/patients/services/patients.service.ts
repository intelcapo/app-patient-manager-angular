import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from '../models/patient.model';
import { MOCK_PATIENTS } from '../mocks/patients.mock';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor() {}

  getAllPatients(): Observable<Patient[]> {
    return of(MOCK_PATIENTS);
  }
}
