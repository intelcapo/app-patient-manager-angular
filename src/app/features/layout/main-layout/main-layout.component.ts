import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';
import { DropdownSession } from '../dropdown-session/dropdown-session';

@Component({
  selector: 'app-main-layout',
  imports: [SideMenuComponent, RouterOutlet, DropdownSession],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: true,
})
export class MainLayoutComponent {}
