import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.scss']
})
export class PatientLoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Logique de soumission du formulaire pour la connexion du patient
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Ajouter ici la logique d'authentification pour le patient
  }
}
