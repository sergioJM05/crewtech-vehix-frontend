import {Component, Input} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {EstimatesService} from '../../services/estimates.service';

@Component({
  selector: 'app-timeline',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent{
  estimates: any;
  constructor(private estimatesService: EstimatesService) {
    this.estimatesService.getEstimates().subscribe((estimates: any) => {
      this.estimates = estimates;
      console.log(this.estimates);
    });
  }


}
