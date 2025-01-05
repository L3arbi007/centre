import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    {
      name: 'Médecine Générale',
      description: 'Consultations complètes pour vos besoins de santé quotidiens.',
      icon: '/assets/services.medecine generale.jpg',
    },
    {
      name: 'Pédiatrie',
      description: 'Soins spécialisés pour les enfants, du nouveau-né à l\'adolescent.',
      icon: '/assets/services.pediatrie.jpg',
    },
    {
      name: 'Gynécologie',
      description: 'Suivi médical pour toutes les étapes de la santé féminine.',
      icon: '/assets/services.gynecologe.jpg',
    },
    {
      name: 'Cardiologie',
      description: 'Diagnostic et suivi des pathologies cardiovasculaires.',
      icon: '/assets/services.cardiologie.jpeg',
    },
    {
      name: 'Dermatologie',
      description: 'Traitement des affections de la peau, des cheveux et des ongles.',
      icon: '/assets/services.dermatologie.jpg',
    },
    {
      name: 'Radiologie et Imagerie',
      description: 'Équipements modernes pour vos examens d\'imagerie.',
      icon: '/assets/services.radiologies.jpg',
    },
    {
      name: 'Laboratoire d\'Analyses',
      description: 'Examens biologiques précis et rapides sur place.',
      icon: '/assets/services.laboratoires d\'analyses.jpg',
    },
    {
      name: 'Kinésithérapie',
      description: 'Rééducation personnalisée pour un rétablissement optimal.',
      icon: '/assets/services.kiné.jpg',
    },
    {
      name: 'Service d\'Urgences',
      description: 'Prise en charge rapide pour les situations urgentes non vitales.',
      icon: '/assets/services.urgences.jpg',
    },
    {
      name: 'Médecine Préventive',
      description: 'Bilans de santé et programmes de prévention.',
      icon: '/assets/services.medecines preventives.jpg',
    },
  ];
}
