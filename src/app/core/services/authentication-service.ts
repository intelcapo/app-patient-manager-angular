import { inject, Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private auth = inject(Auth);

  public currentUser$: Observable<User | null> = authState(this.auth);

  constructor() {}

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error with login:', error);
      throw error;
    }
  }

  async loginWithGmail() {
    try {
      //1. init google provider
      const provider = new GoogleAuthProvider();
      //2. push the popup
      const userCredential = await signInWithPopup(this.auth, provider);
      console.log('¡Autenticado con Google exitosamente!', userCredential.user.displayName);
      return userCredential.user;
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      throw error;
    }
  }

  async getToken() {
    const currentUser = this.auth.currentUser;
    if (currentUser) {
      const token = currentUser.getIdToken();
      return token;
    } else {
      console.warn('There is no user logged');
      return null;
    }
  }

  async logout() {
    await signOut(this.auth);
  }

  async register(email: string, password: string) {
    try {
      // Firebase crea el usuario y lo loguea automáticamente
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('¡Cuenta creada exitosamente!', userCredential.user.uid);

      // Nota: Aquí más adelante conectaremos con Firestore para guardar su "Rol"

      return userCredential.user;
    } catch (error) {
      console.error('Error al crear la cuenta:', error);
      throw error; // Lanzamos el error para que el componente lo muestre en pantalla
    }
  }
}
