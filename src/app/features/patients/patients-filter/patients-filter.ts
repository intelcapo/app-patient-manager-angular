import { Component, EventEmitter, Output } from '@angular/core';
import { SearchInput } from '../../../shared/ui/components/search-input/search-input';
import { SelectInput } from '../../../shared/ui/components/select-input/select-input';
import { SelectOption } from '../../../shared/models/selectOption.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PatientFilterDTO } from '../models/patient-filter.model';

@Component({
  selector: 'app-patients-filter',
  imports: [SearchInput, SelectInput, ReactiveFormsModule],
  templateUrl: './patients-filter.html',
  styleUrl: './patients-filter.scss',
})
export class PatientsFilter {
  optionsForStatus: SelectOption[] = [
    {
      value: '0',
      label: 'Inactivo',
    },
    {
      value: '1',
      label: 'Activo',
    },
  ];

  optionsForCities: SelectOption[] = [
    {
      value: '0',
      label: 'Bogotá',
    },
    {
      value: '1',
      label: 'Medellín',
    },
    {
      value: '2',
      label: 'Cali',
    },
    {
      value: '3',
      label: 'Barranquilla',
    },
    {
      value: '4',
      label: 'Pasto',
    },
    {
      value: '5',
      label: 'Bucaramanga',
    },
    {
      value: '6',
      label: 'Cartagena',
    },
  ];

  frmFilter = new FormGroup({
    dataToSearch: new FormControl(),
    status: new FormControl(),
    city: new FormControl(),
  });

  @Output()
  onFilter: EventEmitter<PatientFilterDTO> = new EventEmitter();

  /**
   *
   */
  constructor() {
    this.frmFilter.valueChanges.subscribe({
      next: (data) => {
        this.onFilter.emit(data as PatientFilterDTO);
      },
    });
  }
}
