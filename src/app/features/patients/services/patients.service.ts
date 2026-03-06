import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from '../models/patient.model';
import { MOCK_PATIENTS } from '../mocks/patients.mock';
import { HttpClient } from '@angular/common/http';
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { AuthenticationService } from '../../../core/services/authentication-service';
import { PaginationResponse } from '../../../core/Models/pagination.response';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private http = inject(HttpClient);
  private firebaseStorage = inject(Storage);
  private auth = inject(AuthenticationService);

  constructor() {}

  getAllPatients(): Observable<PaginationResponse<Patient>> {
    //return this.http.get<PaginationResponse<Patient>>('http://localhost:3000/patients?limit=30');
    return of({
      data: MOCK_PATIENTS,
      meta: {
        itemsPerPage: MOCK_PATIENTS.length,
        currentPage: 1,
        totalItems: MOCK_PATIENTS.length,
        totalPages: 1,
      },
    } as PaginationResponse<Patient>);
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

  async uploadPatientImage(selectedFile: File | null) {
    try {
      if (!selectedFile) return;

      const currrentUserID = await this.auth.getUserId();
      if (currrentUserID) {
        const filePath = `patients/${currrentUserID}/${Date.now()}_${selectedFile.name}`;

        const storageRef = ref(this.firebaseStorage, filePath);

        await uploadBytes(storageRef, selectedFile);

        const imgUrl = await getDownloadURL(storageRef);

        console.log('¡Imagen subida! URL obtenida:', imgUrl);

        return imgUrl;
      }
    } catch (error) {
      console.error(error);
    }

    return null;
  }
}
