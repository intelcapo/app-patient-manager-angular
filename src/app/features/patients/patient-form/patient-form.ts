import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../shared/ui/components/card/card.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PatientsService } from '../services/patients.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-patient-form',
  imports: [CardComponent, ReactiveFormsModule, SharedModule],
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
    medicalInformation: new FormGroup({
      hasEPSAffiliation: new FormControl(false),
      hasEPSPremiumAffiliation: new FormControl(false),
      pathologyName: new FormControl(''),
      medicationName: new FormControl(''),
      allergyName: new FormControl(''),
    }),
  });

  patientHasEPSAffiliation: boolean = false;
  patientHasMedicalConditions: boolean = false;
  patientHasCurrentMedications: boolean = false;
  patientHasAllergies: boolean = false;

  patientMedicalConditions: string[] = [];
  patientCurrentMedications: string[] = [];
  patientCurrentAllergies: string[] = [];

  readonly patientService = inject(PatientsService);
  /**
   *
   */
  constructor() {
    this.frmPatient.controls['age'].disable();

    this.frmPatient.controls['birthDate'].valueChanges.subscribe((birthDate) => {
      this.frmPatient.controls['age'].setValue(this.patientService.getCurrentAge(birthDate));
    });

    this.frmPatient.controls['medicalInformation'].valueChanges.subscribe((medicalInformation) => {
      const { hasEPSAffiliation } = medicalInformation;
      this.patientHasEPSAffiliation = hasEPSAffiliation || false;
    });
  }

  addMedicalCondition(pathologyName: string | null) {
    console.log(`addMedicalCondition: ${pathologyName}`);
    if (!pathologyName) {
      return;
    }
    this.patientMedicalConditions.push(pathologyName);
    console.log(this.patientMedicalConditions);
    this.frmPatient.controls['medicalInformation'].controls['pathologyName'].reset();
  }

  removeMedicalCondition(pathologyName: string) {
    console.log(`removeMedicalCondition ${pathologyName}`);
    const pathologyIndex = this.patientMedicalConditions.findIndex(
      (pathology) => pathology == pathologyName,
    );

    console.log(`removeMedicalCondition ${pathologyName} index: ${pathologyIndex}`);

    if (pathologyIndex >= 0) {
      this.patientMedicalConditions.splice(pathologyIndex, 1);
    }
  }

  addCurrentMedication(medicationName: string | null) {
    if (!medicationName) {
      return;
    }

    this.patientCurrentMedications.push(medicationName);
    this.frmPatient.controls['medicalInformation'].controls['medicationName'].reset();
  }

  removeMedication(medicationName: string) {
    const medicationIndex = this.patientCurrentMedications.findIndex(
      (medication) => medication == medicationName,
    );

    console.log(`removeMedication ${medicationName} index: ${medicationIndex}`);

    if (medicationIndex >= 0) {
      this.patientCurrentMedications.splice(medicationIndex, 1);
    }
  }
  addAllergy(allergyName: string | null) {
    if (!allergyName) {
      return;
    }

    this.patientCurrentAllergies.push(allergyName);
    this.frmPatient.controls['medicalInformation'].controls['allergyName'].reset();
  }

  removeAllergy(allergyName: string | null) {}

  createPatient(event: any) {
    event.preventDefault();
    console.log(this.frmPatient.value);
  }
}
