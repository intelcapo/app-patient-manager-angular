import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-rounded',
  imports: [],
  templateUrl: './btn-rounded.html',
  styleUrl: './btn-rounded.scss',
})
export class BtnRounded {
  @Input()
  label: string = '';

  @Output()
  onClicked = new EventEmitter<any>();
}
