import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PatientsRoutingModule, SharedModule],
})
export class PatientsModule {}
