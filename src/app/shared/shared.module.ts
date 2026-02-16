import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './ui/components/card/card.component';
import { SearchInput } from './ui/components/search-input/search-input';
import { SelectInput } from './ui/components/select-input/select-input';

@NgModule({
  declarations: [],
  imports: [CommonModule, CardComponent, SearchInput, SelectInput],
  exports: [CardComponent, SearchInput, SelectInput],
})
export class SharedModule {}
