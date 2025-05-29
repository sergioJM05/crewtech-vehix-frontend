import {Component, OnInit} from '@angular/core';
import {AlertsService} from '../../services/alerts.service';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {VehicleService} from '../../../shared/services/vehicle.service';

@Component({
  selector: 'app-alerts',
  imports: [
    MatTable,
    MatColumnDef,
    MatCell,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent{
  alertsList: any[] = [];
  displayedColumns: string[] = ['name', 'type', 'status',];
  constructor(private alertsService: AlertsService) {
    this.alertsService.getAlerts().subscribe((alerts: any) => {
      this.alertsList = alerts;
      console.log(this.alertsList);
    });
  }



}
