import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.scss']
})
export class StaffLoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Logique de soumission du formulaire pour la connexion du staff médical
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Ajouter ici la logique d'authentification pour le personnel médical
  }
}
