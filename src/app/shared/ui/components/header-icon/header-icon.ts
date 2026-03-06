import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-icon',
  imports: [],
  templateUrl: './header-icon.html',
  styleUrl: './header-icon.scss',
})
export class HeaderIcon {
  @Input()
  iconName: string = ''
}
