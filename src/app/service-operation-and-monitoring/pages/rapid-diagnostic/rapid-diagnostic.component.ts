import { Component } from '@angular/core';
import {ShowCarComponent} from '../../../shared/components/show-car/show-car.component';
import {VehicleService} from '../../../shared/services/vehicle.service';
import {StatusComponent} from '../../../statistical-data-analysis/components/status/status.component';
@Component({
  selector: 'app-rapid-diagnostic',
  imports: [
    ShowCarComponent,
    StatusComponent
  ],
  templateUrl: './rapid-diagnostic.component.html',
  styleUrl: './rapid-diagnostic.component.css'
})
export class RapidDiagnosticComponent {
  vehicleList: any[]=[];

  sectionTitle = 'Rapid Diagnostic';
  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getVehicles().subscribe((vehicles: any) => {
      this.vehicleList = vehicles;
      console.log(this.vehicleList);
    });
  }

}
