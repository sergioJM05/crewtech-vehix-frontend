import { Component } from '@angular/core';
import {ShowCarComponent} from '../../../shared/components/show-car/show-car.component';
import {VehicleService} from '../../../shared/services/vehicle.service';
import {AlertsComponent} from '../../components/alerts/alerts.component';
import {RepairsComponent} from '../../components/repairs/repairs.component';
@Component({
  selector: 'app-recents-repairs',
  imports: [
    ShowCarComponent,
    AlertsComponent,
    RepairsComponent
  ],
  templateUrl: './recents-repairs.component.html',
  styleUrl: './recents-repairs.component.css'
})
export class RecentsRepairsComponent {
  vehicleList: any[]=[];

  sectionTitle = 'Recent Repairs';
  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getVehicles().subscribe((vehicles: any) => {
      this.vehicleList = vehicles;
      console.log(this.vehicleList);
    });
  }
}


