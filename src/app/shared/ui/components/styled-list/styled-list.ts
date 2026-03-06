import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-styled-list',
  imports: [],
  templateUrl: './styled-list.html',
  styleUrl: './styled-list.scss',
})
export class StyledList {
  @Input({ required: true }) items!: string[];

  @Output()
  onRemoveitem = new EventEmitter<any>();
}
