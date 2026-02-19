import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './ui/components/card/card.component';
import { SearchInput } from './ui/components/search-input/search-input';
import { SelectInput } from './ui/components/select-input/select-input';
import { BtnAction } from './ui/components/btn-action/btn-action';
import { BtnRounded } from './ui/components/btn-rounded/btn-rounded';

@NgModule({
  declarations: [],
  imports: [CommonModule, CardComponent, SearchInput, SelectInput, BtnAction, BtnRounded],
  exports: [CardComponent, SearchInput, SelectInput, BtnAction, BtnRounded],
})
export class SharedModule {}
