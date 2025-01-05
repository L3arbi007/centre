import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // Simule l'envoi des données du formulaire
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert('Votre message a été envoyé avec succès !');
      form.reset();
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }
}
