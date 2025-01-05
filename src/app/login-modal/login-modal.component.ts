import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {

  constructor(private router: Router) {}

  navigateToLogin(role: string) {
    if (role === 'patient') {
      this.router.navigate(['/login-patient']);  // Redirige vers la page de login patient
    } else if (role === 'medecin') {
      this.router.navigate(['/login-doctor']);  // Redirige vers la page de login médecin
    } else if (role === 'staff') {
      this.router.navigate(['/login-staff']);  // Redirige vers la page de login staff médical
    }
  }
}
