import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-des-patients',
  templateUrl: './gestion-des-patients.component.html',
  styleUrls: ['./gestion-des-patients.component.scss']
})
export class GestionDesPatientsComponent implements OnInit {
  // Tableau vide pour le moment
  patients = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.patients); // Vérifiez dans la console si les données sont présentes
  }

  viewPatientDetails(patientId: number) {
    alert(`Détails du patient pour l'ID: ${patientId} - Les données seront disponibles prochainement.`);
  }
}
