import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../shared/ui/components/card/card.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Patient } from '../models/patient.model';
import { disabled, email } from '@angular/forms/signals';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-patient-form',
  imports: [CardComponent, ReactiveFormsModule],
  providers: [PatientsService],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.scss',
})
export class PatientForm {
  frmPatient = new FormGroup({
    documentType: new FormControl(''),
    documentNumber: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    genderIdentity: new FormControl(''),
    birthDate: new FormControl(''),
    age: new FormControl(0),
    maritalStatus: new FormControl(''),
    educationLevel: new FormControl(''),
    job: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(''),
    socioEconomicStratum: new FormControl(1),
    victimOfArmedConflict: new FormControl(''),
    isDisplaced: new FormControl(''),
  });

  readonly patientService = inject(PatientsService);
  /**
   *
   */
  constructor() {
    this.frmPatient.controls['age'].disable();

    this.frmPatient.controls['birthDate'].valueChanges.subscribe((birthDate) => {
      this.frmPatient.controls['age'].setValue(this.patientService.getCurrentAge(birthDate));
    });
  }

  createPatient(event: any) {
    event.preventDefault();
    console.log(this.frmPatient.value);
  }
}
