import {Component, OnInit} from '@angular/core';
import {ShowCarComponent} from '../../../shared/components/show-car/show-car.component';
import {Vehicle} from '../../../assets-and-resource-management/model/vehicle.entity';
import {VehicleService} from '../../../shared/services/vehicle.service';
@Component({
  selector: 'app-about-your-vehicle',
  imports: [
    ShowCarComponent
  ],
  templateUrl: './about-your-vehicle.component.html',
  styleUrl: './about-your-vehicle.component.css'
})

export class AboutYourVehicleComponent {
  vehicleList: Vehicle[] = [];
  sectionTitle = 'About your Vehicle';

  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getVehicles().subscribe((vehicles: Vehicle[]) => {
      this.vehicleList = vehicles;
      console.log(this.vehicleList);
    });
  }
}
