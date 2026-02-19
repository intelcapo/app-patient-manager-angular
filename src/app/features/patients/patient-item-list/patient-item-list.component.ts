import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../shared/ui/components/card/card.component';
import { Patient } from '../models/patient.model';
import { DatePipe } from '@angular/common';
import { BtnAction } from '../../../shared/ui/components/btn-action/btn-action';

@Component({
  selector: 'app-patient-item-list',
  imports: [CardComponent, DatePipe, BtnAction],
  templateUrl: './patient-item-list.component.html',
  styleUrl: './patient-item-list.component.scss',
})
export class PatientItemListComponent {
  @Input()
  patient?: Patient;
}
