import {Component} from '@angular/core';
import {ShowCarComponent} from '../../../shared/components/show-car/show-car.component';
import {Vehicle} from '../../../assets-and-resource-management/model/vehicle.entity';
import {VehicleService} from '../../../shared/services/vehicle.service';
import {AlertsComponent} from '../../components/alerts/alerts.component';
import {RepairsComponent} from '../../components/repairs/repairs.component';
import {RadarChartComponent} from '../../../statistical-data-analysis/components/radar-chart/radar-chart.component';
import {
  FutureProblemsComponent
} from '../../../statistical-data-analysis/components/future-problems/future-problems.component';

@Component({
  selector: 'app-problem-forecasting',
  imports: [
    ShowCarComponent,
    RadarChartComponent,
    FutureProblemsComponent
  ],
  templateUrl: './problem-forecasting.component.html',
  styleUrl: './problem-forecasting.component.css'
})

export class ProblemForecastingComponent {
  vehicleList: Vehicle[] = []; // Usa la interfaz
  sectionTitle = 'Problem Forecasting';

  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getVehicles().subscribe((vehicles: any) => {
      this.vehicleList = vehicles;
      console.log(this.vehicleList);
    });
  }
}
