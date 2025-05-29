import { Component } from '@angular/core';
import {VehicleService} from '../../../shared/services/vehicle.service';
import {ShowCarComponent} from '../../../shared/components/show-car/show-car.component';
import {TimelineComponent} from '../../../statistical-data-analysis/components/timeline/timeline.component';
import {ProgressBarComponent} from '../../../statistical-data-analysis/components/progress-bar/progress-bar.component';
import {MatCard} from '@angular/material/card';
import {
  EstimatedLifeComponent
} from '../../../statistical-data-analysis/components/estimated-life/estimated-life.component';

@Component({
  selector: 'app-car-useful-life',
  imports: [
    ShowCarComponent,
    TimelineComponent,
    ProgressBarComponent,
    MatCard,
    EstimatedLifeComponent,
  ],
  templateUrl: './car-useful-life.component.html',
  styleUrl: './car-useful-life.component.css'
})
export class CarUsefulLifeComponent {
  vehicleList: any[]=[];
  vehicleUsefulInformation: any;

  sectionTitle = 'Car Useful Life';

  constructor(private vehicleService: VehicleService,
              // private carUsefulService: CarUsefulInformationService
  ) {
    this.vehicleService.getVehicles().subscribe((vehicles: any) => {
      this.vehicleList = vehicles;
      console.log(this.vehicleList);
    });

  }

}
