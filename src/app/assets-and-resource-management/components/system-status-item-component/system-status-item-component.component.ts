import {Component, Input} from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-system-status-item-component',
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './system-status-item-component.component.html',
  styleUrl: './system-status-item-component.component.css'
})
export class SystemStatusItemComponentComponent {
      @Input() systemName: string = '';
      @Input() percentage: number = 0;
}
