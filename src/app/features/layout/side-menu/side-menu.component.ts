import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  standalone: true,
})
export class SideMenuComponent {
  @Output()
  onCloseMenu: EventEmitter<any> = new EventEmitter<any>();
}
