import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-action',
  imports: [],
  templateUrl: './btn-action.html',
  styleUrl: './btn-action.scss',
})
export class BtnAction {
  @Input()
  label: string = '';

  @Input()
  buttonType: string = 'normal';

  @Output()
  onButtonClicked = new EventEmitter<any>();

  onClick() {
    this.onButtonClicked.emit();
  }
}
