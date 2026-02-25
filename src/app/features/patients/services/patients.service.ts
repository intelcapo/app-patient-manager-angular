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

  getCurrentAge(birthDateString: string | null): number {
    if (!birthDateString) {
      return 0;
    }
    const arrayBirthDate = birthDateString.split('-');

    const birthYear = parseInt(arrayBirthDate[0]);
    const birthMonth = parseInt(arrayBirthDate[1]);
    const birthDay = parseInt(arrayBirthDate[2]);

    const currentDate = new Date(Date.now());
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let currentAge = 0;
    currentAge = currentYear - birthYear;
    if (currentMonth <= birthMonth) {
      currentAge--;
      if (currentMonth == birthMonth) {
        if (currentDay >= birthDay) {
          currentAge++;
        }
      }
    }

    return currentAge;
  }
}
