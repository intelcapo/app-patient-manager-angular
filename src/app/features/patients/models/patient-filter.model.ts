import { SelectOption } from '../../../shared/models/selectOption.model';

export interface PatientFilterDTO {
  dataToSearch: string;
  status: SelectOption | null;
  city: SelectOption | null;
}
