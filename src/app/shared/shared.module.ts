import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './ui/components/card/card.component';
import { SearchInput } from './ui/components/search-input/search-input';

@NgModule({
  declarations: [],
  imports: [CommonModule, CardComponent, SearchInput],
  exports: [CardComponent, SearchInput],
})
export class SharedModule {}
