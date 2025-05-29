import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-failure-item',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCheckbox
  ],
  templateUrl: './failure-item.component.html',
  styleUrl: './failure-item.component.css'
})
export class FailureItemComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() solution!: string;
  @Input() isSolved: boolean = false;
}
