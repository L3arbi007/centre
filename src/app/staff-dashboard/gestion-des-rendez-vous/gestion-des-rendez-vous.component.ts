import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-des-rendez-vous',
  templateUrl: './gestion-des-rendez-vous.component.html',
  styleUrls: ['./gestion-des-rendez-vous.component.scss']
})
export class GestionDesRendezVousComponent implements OnInit {
  appointment = {
    doctor: '',
    patient: '',
    date: ''
  };
  
  doctors = [
    { id: 1, name: 'Dr. Dupont' },
    { id: 2, name: 'Dr. Martin' },
    { id: 3, name: 'Dr. Lefevre' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addAppointment() {
    if (this.appointment.doctor && this.appointment.patient && this.appointment.date) {
      // Simuler l'ajout d'un rendez-vous
      console.log('Rendez-vous ajouté:', this.appointment);
      alert('Rendez-vous ajouté avec succès');
      this.appointment = { doctor: '', patient: '', date: '' }; // Réinitialiser le formulaire
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
}
