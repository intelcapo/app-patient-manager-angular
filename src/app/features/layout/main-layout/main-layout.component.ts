import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [SideMenuComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: true,
})
export class MainLayoutComponent {}
