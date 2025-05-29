import { Component } from '@angular/core';
import {EstimatesService} from '../../services/estimates.service';
import {MatProgressBar} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  imports: [
    MatProgressBar
  ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})

export class ProgressBarComponent{
  estimates: any;
  constructor(private estimatesService: EstimatesService) {
    this.estimatesService.getEstimates().subscribe((estimates: any) => {
      this.estimates = estimates;
      console.log(this.estimates);
    });
  }


}
