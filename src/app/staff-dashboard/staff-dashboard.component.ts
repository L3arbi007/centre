import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.scss']
})
export class StaffDashboardComponent {
  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
