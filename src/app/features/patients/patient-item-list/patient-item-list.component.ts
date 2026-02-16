import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../shared/ui/components/card/card.component';
import { Patient } from '../models/patient.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-item-list',
  imports: [CardComponent, DatePipe],
  templateUrl: './patient-item-list.component.html',
  styleUrl: './patient-item-list.component.scss',
})
export class PatientItemListComponent {
  @Input()
  patient?: Patient;
}
