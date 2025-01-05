import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesRendezVousComponent } from './gestion-des-rendez-vous.component';

describe('GestionDesRendezVousComponent', () => {
  let component: GestionDesRendezVousComponent;
  let fixture: ComponentFixture<GestionDesRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesRendezVousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
