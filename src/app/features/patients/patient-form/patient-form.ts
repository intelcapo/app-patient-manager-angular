import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/ui/components/card/card.component';

@Component({
  selector: 'app-patient-form',
  imports: [CardComponent],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.scss',
})
export class PatientForm {}
