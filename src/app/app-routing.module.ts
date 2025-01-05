import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importation des composants principaux
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { DoctorLoginComponent } from './login-modal/doctor-login/doctor-login.component';
import { PatientLoginComponent } from './login-modal/patient-login/patient-login.component';
import { StaffLoginComponent } from './login-modal/staff-login/staff-login.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { GestionDesRendezVousComponent } from './staff-dashboard/gestion-des-rendez-vous/gestion-des-rendez-vous.component';
import { GestionDesPatientsComponent as StaffGestionDesPatientsComponent } from './staff-dashboard/gestion-des-patients/gestion-des-patients.component';

// Importation des sous-composants du tableau de bord patient
import { MedicalRecordsComponent as PatientMedicalRecordsComponent } from './patient-dashboard/medical-records/medical-records.component';
import { ConsultationAppointmentsComponent } from './patient-dashboard/consultation-appointments/consultation-appointments.component';
// Importation des sous-composants du tableau de bord doctor
import { GestionDesPatientsComponent as DoctorGestionDesPatientsComponent } from './doctor-dashboard/gestion-des-patients/gestion-des-patients.component';
import { MedicalRecordsComponent as DoctorMedicalRecordsComponent } from './doctor-dashboard/medical-records/medical-records.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection par défaut vers la page d'accueil
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginModalComponent },
  { path: 'login-doctor', component: DoctorLoginComponent },
  { path: 'login-patient', component: PatientLoginComponent },
  { path: 'login-staff', component: StaffLoginComponent },

  // Routes des tableaux de bord
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'patient-dashboard', component: PatientDashboardComponent },
  { path: 'staff-dashboard', component: StaffDashboardComponent },

  // Gestion des rendez-vous et des patients pour le staff
  { path: 'gestion-des-rendez-vous', component: GestionDesRendezVousComponent },
  { path: 'gestion-des-patients', component: StaffGestionDesPatientsComponent },

  // Sous-routes du tableau de bord patient
  { path: 'medical-records', component: PatientMedicalRecordsComponent },
  { path: 'consultation-appointments', component: ConsultationAppointmentsComponent },

  // Sous-routes du tableau de bord doctor
  { path: 'doctor-gestion-des-patients', component: DoctorGestionDesPatientsComponent },
  { path: 'doctor-medical-records', component: DoctorMedicalRecordsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
