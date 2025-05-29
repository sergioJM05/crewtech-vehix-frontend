import { Component } from '@angular/core';
import {ProbabilitiesService} from '../../services/probabilities.service';

@Component({
  selector: 'app-future-problems',
  imports: [],
  templateUrl: './future-problems.component.html',
  styleUrl: './future-problems.component.css'
})
export class FutureProblemsComponent {

  probabilities: any;
  constructor(private probabilitiesService: ProbabilitiesService) {
    this.probabilitiesService.getProbabilitiesFailures().subscribe((status: any) => {
      this.probabilities = status;
      console.log(this.probabilities);
    });
  }
}
