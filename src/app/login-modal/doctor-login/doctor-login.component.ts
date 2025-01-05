import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Logique de soumission du formulaire pour la connexion du médecin
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Ajouter ici la logique d'authentification (par exemple, appel à un service d'authentification)
  }
}
