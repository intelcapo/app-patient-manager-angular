import { Component, inject, OnInit, signal } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DropdownSession } from '../dropdown-session/dropdown-session';
import { LayoutService } from '../services/layout';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  imports: [SideMenuComponent, RouterOutlet, DropdownSession],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: true,
})
export class MainLayoutComponent {
  title = signal('');

  private router = inject(Router);
  private layoutService = inject(LayoutService);

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentURL = event.url;
        this.title.set(this.layoutService.getCurrentTitle(currentURL));
      });
  }
}
