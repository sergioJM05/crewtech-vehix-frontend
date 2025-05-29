import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-estimated-life',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './estimated-life.component.html',
  styleUrl: './estimated-life.component.css'
})
export class EstimatedLifeComponent {

}
