import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication-service';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-session',
  imports: [],
  templateUrl: './dropdown-session.html',
  styleUrl: './dropdown-session.scss',
})
export class DropdownSession implements OnInit {
  private authService = inject(AuthenticationService);
  private router = inject(Router);

  userName = signal('');
  userProfileURL = signal('assets/images/userProfile.png');

  // Variable para controlar si el menú está visible o no
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  currentUser: User | null = null;

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((userData) => {
      this.currentUser = userData;
      this.userName.set(this.currentUser?.displayName || '');
      this.userProfileURL.set(this.currentUser?.photoURL || 'assets/images/userProfile.png');
    });
  }

  async onLogout() {
    try {
      this.isOpen = false;
      await this.authService.logout();
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
    }
  }
}
