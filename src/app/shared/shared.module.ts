import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './ui/components/card/card.component';
import { SearchInput } from './ui/components/search-input/search-input';
import { SelectInput } from './ui/components/select-input/select-input';
import { BtnAction } from './ui/components/btn-action/btn-action';
import { BtnRounded } from './ui/components/btn-rounded/btn-rounded';
import { StyledList } from './ui/components/styled-list/styled-list';
import { HeaderIcon } from './ui/components/header-icon/header-icon';
import { HeaderSection } from './ui/components/header-section/header-section';
import { BtnSquare } from './ui/components/btn-square/btn-square';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardComponent,
    SearchInput,
    SelectInput,
    BtnAction,
    BtnRounded,
    StyledList,
    HeaderIcon,
    HeaderSection,
    BtnSquare,
  ],
  exports: [
    CardComponent,
    SearchInput,
    SelectInput,
    BtnAction,
    BtnRounded,
    StyledList,
    HeaderIcon,
    HeaderSection,
    BtnSquare,
  ],
})
export class SharedModule {}
