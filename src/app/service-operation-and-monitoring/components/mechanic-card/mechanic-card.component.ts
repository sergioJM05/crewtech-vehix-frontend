import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mechanic-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './mechanic-card.component.html',
  styleUrls: ['./mechanic-card.component.css']
})
export class MechanicCardComponent {
  @Input() name!: string;
  @Input() address!: string;
  @Input() distance!: string;
  @Input() phone!: string;
}
