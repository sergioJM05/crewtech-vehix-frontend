import {Component, OnInit} from '@angular/core';
import {SystemStatusService} from '../../services/system-status-service/system-status.service';
import {
  SystemStatusItemComponentComponent
} from '../system-status-item-component/system-status-item-component.component';

@Component({
  selector: 'app-system-status-list',
  imports: [
    SystemStatusItemComponentComponent,
  ],
  templateUrl: './system-status-list.component.html',
  styleUrl: './system-status-list.component.css'
})
export class SystemStatusListComponent implements OnInit {
  systems: { name: string; percentage: number }[] = [];
  constructor(private statusService: SystemStatusService) {}
  ngOnInit() {
    const vehicleId = 1;
    this.statusService.getStatusByVehicle(vehicleId).subscribe(status => {
      this.systems = [
        { name: 'Engine System', percentage: status.engine },
        { name: 'Transmission System', percentage: status.transmission },
        { name: 'Brake System', percentage: status.brakes },
        { name: 'Electrical System', percentage: status.electrical },
        { name: 'Steering System', percentage: status.steering },
        { name: 'Suspension System', percentage: status.suspension },
        { name: 'Fuel System', percentage: status.fuel },
        { name: 'Cooling System', percentage: status.refrigeration }
      ];
    });
  }
}
