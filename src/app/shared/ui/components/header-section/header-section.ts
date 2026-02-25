import { Component, Input } from '@angular/core';
import { HeaderIcon } from '../header-icon/header-icon';

@Component({
  selector: 'app-header-section',
  imports: [HeaderIcon],
  templateUrl: './header-section.html',
  styleUrl: './header-section.scss',
})
export class HeaderSection {
  @Input()
  iconName: string = '';

  @Input()
  title: string = '';
}
