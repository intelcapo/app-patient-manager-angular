import { LegalDocument } from '../../../core/Models/document.model';
import { Contact, Person } from '../../../core/Models/person.model';

export interface Patient extends Person {
  genderIdentity?: string;
  currentAge?: number;
  maritalStatus?: string;
  educationLevel?: string;
  job?: string;
  socioEconomicStratum?: string;
  isVictimOfArmedConflict?: boolean;
  isDisplaced?: boolean;
  emergencyContacts?: EmergencyContact[];
  medicalInformation?: MedicalInformation;
  consultationReason?: string;
  documents?: PatientDocument[];
  habitsAndLifeStyleInformation?: {
    useAlcohol: boolean;
    useDrugs: boolean;
  };
  lastSessionDate: Date;
  status: boolean;
  sessions: any[];
  creationDate: Date;
  modificationDate: Date;
}

export interface EmergencyContact extends Contact {}

export interface MedicalInformation {
  hasEPSAffiliation?: boolean;
  EPSName?: string;
  hasPathologies?: boolean;
  pathologies?: string[];
  hasCurrentMedications?: boolean;
  currentMedicationNames: string[];
  hasAllergies?: boolean;
  allergyNames?: string[];
}

export interface PatientDocument extends LegalDocument {}
