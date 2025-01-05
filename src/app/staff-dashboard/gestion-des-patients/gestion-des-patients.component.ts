import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-des-patients',
  templateUrl: './gestion-des-patients.component.html',
  styleUrls: ['./gestion-des-patients.component.scss']
})
export class GestionDesPatientsComponent implements OnInit {
  patients = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '0123456789' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '0987654321' },
    { id: 3, name: 'Paul Riviere', email: 'paul.riviere@example.com', phone: '0147258369' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewPatientDetails(patientId: number) {
    const patient = this.patients.find(p => p.id === patientId);
    if (patient) {
      alert(`Détails du patient:\nNom: ${patient.name}\nEmail: ${patient.email}\nTéléphone: ${patient.phone}`);
    }
  }
}
