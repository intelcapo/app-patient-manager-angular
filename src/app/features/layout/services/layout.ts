import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  getCurrentTitle(URL: string): string {
    let currentPaths = URL.split('/');
    currentPaths.shift();
    const mainModule = currentPaths[0].toLowerCase();
    let actionModule = '';
    if (currentPaths.length > 1) {
      actionModule = currentPaths[1].toLowerCase();
    }

    let currentTitle = '';

    switch (mainModule) {
      case 'dashboard':
        currentTitle = 'Dashboard';
        break;
      case 'patients':
        if (currentPaths.length === 1) {
          currentTitle = 'Mis pacientes';
        } else {
          if (actionModule === 'new') {
            currentTitle = 'Paciente nuevo';
          }
        }
        break;
    }
    return currentTitle;
  }
}
