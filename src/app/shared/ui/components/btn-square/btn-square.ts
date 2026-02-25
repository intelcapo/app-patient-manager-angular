import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-square',
  imports: [],
  templateUrl: './btn-square.html',
  styleUrl: './btn-square.scss',
})
export class BtnSquare {
  @Input()
  iconName: string = '';

  @Output()
  onClicked = new EventEmitter<any>();
}
