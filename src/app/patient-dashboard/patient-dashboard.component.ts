import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']  // Vérifiez le chemin du fichier CSS
})
export class PatientDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Méthode pour naviguer vers les dossiers médicaux
  viewMedicalRecords(): void {
    this.router.navigate(['/medical-records']);
  }

  // Méthode pour naviguer vers les rendez-vous
  viewAppointments(): void {
    this.router.navigate(['/consultation-appointments']);
  }
}
