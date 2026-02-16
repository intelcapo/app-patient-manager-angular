export interface Patient {
  id: string;
  name: string;
  lastName: string;
  birthDate: Date;
  lastSessionDate: Date;
  locationName: string;
  status: boolean;
  sessions: any[];
  creationDate: Date;
  modificationDate: Date;
}
