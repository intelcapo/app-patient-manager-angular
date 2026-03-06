import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../core/services/authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private routerService = inject(Router);
  // Variables conectadas al formulario HTML
  email = '';
  password = '';

  // Mensajes para el usuario
  errorMessage = '';
  successMessage = '';

  // Inyectamos nuestro servicio del Core
  private authService = inject(AuthenticationService);

  async onRegister() {
    this.errorMessage = ''; // Limpiamos errores previos
    this.successMessage = '';

    try {
      // Llamamos a la función que creamos en el Paso 1
      await this.authService.register(this.email, this.password);
      this.successMessage = '¡Cuenta creada con éxito! Ya puedes iniciar sesión.';

      // Limpiamos el formulario
      this.email = '';
      this.password = '';
    } catch (error: any) {
      // Si la contraseña es muy corta o el correo ya existe, Firebase avisa aquí
      this.errorMessage = 'Hubo un error al crear la cuenta. Verifica tus datos.';
      console.error(error);
    }
  }

  async onGoogleLogin() {
    this.errorMessage = '';
    this.successMessage = '';
    try {
      await this.authService.loginWithGmail();
      this.successMessage = '¡Cuenta de Google vinculada con éxito!';
      // Aquí normalmente haríamos una redirección al Home o Dashboard

      this.routerService.navigate(['/dashboard']);
    } catch (error: any) {
      this.errorMessage = 'El inicio de sesión con Google fue cancelado o falló.';
      console.error(error);
    }
  }
}
