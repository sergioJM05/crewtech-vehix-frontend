import { Component } from '@angular/core';
import {MechanicMapComponent} from '../../components/mechanic-map/mechanic-map.component';
import {MechanicCardListComponent} from '../../components/mechanic-card-list/mechanic-card-list.component';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrl: './mechanic.component.css',
  imports: [
    MechanicMapComponent,
    MechanicCardListComponent
  ],
})
export class MechanicComponent {
  mechanics: any[] = [];

  updateMechanics(newMechanics: any[]) {
    this.mechanics = newMechanics.map(mechanic => ({
      name: mechanic.name,
      vicinity: mechanic.vicinity,
      distance: mechanic.distance || 0,
      phone: mechanic.phone || 'No disponible',
    }));
  }

}
