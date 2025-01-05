import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

// Angular Material Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Composants
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { PatientLoginComponent } from './login-modal/patient-login/patient-login.component';
import { DoctorLoginComponent } from './login-modal/doctor-login/doctor-login.component';
import { StaffLoginComponent } from './login-modal/staff-login/staff-login.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { GestionDesRendezVousComponent } from './staff-dashboard/gestion-des-rendez-vous/gestion-des-rendez-vous.component';
import { GestionDesPatientsComponent } from './staff-dashboard/gestion-des-patients/gestion-des-patients.component';
import { MedicalRecordsComponent } from './patient-dashboard/medical-records/medical-records.component';
import { ConsultationAppointmentsComponent } from './patient-dashboard/consultation-appointments/consultation-appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    LoginModalComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    StaffLoginComponent,
    DoctorDashboardComponent,
    PatientDashboardComponent,
    StaffDashboardComponent,
    GestionDesRendezVousComponent,
    GestionDesPatientsComponent,
    MedicalRecordsComponent,
    ConsultationAppointmentsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CalendarModule,
    ScheduleModule,
    CheckBoxModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
