import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationAppointmentsComponent } from './consultation-appointments.component';

describe('ConsultationAppointmentsComponent', () => {
  let component: ConsultationAppointmentsComponent;
  let fixture: ComponentFixture<ConsultationAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
