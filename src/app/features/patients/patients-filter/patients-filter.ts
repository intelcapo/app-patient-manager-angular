import { Component } from '@angular/core';
import { SearchInput } from '../../../shared/ui/components/search-input/search-input';

@Component({
  selector: 'app-patients-filter',
  imports: [SearchInput],
  templateUrl: './patients-filter.html',
  styleUrl: './patients-filter.scss',
})
export class PatientsFilter {}
