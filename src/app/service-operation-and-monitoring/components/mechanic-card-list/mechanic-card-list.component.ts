import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MechanicCardComponent } from '../mechanic-card/mechanic-card.component';

@Component({
  selector: 'app-mechanic-card-list',
  standalone: true,
  imports: [
    CommonModule,
    MechanicCardComponent
  ],
  templateUrl: './mechanic-card-list.component.html',
  styleUrls: ['./mechanic-card-list.component.css']
})
export class MechanicCardListComponent {
  @Input() mechanics: any[] = [];
}
