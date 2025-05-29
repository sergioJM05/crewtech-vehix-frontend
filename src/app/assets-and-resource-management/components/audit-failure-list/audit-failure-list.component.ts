import {Component, OnInit} from '@angular/core';
import {FailureItemComponent} from '../failure-item/failure-item.component';

import {BtnGenerateReportComponent} from '../btn-generate-report/btn-generate-report.component';
import {FailureService} from '../../services/failures-service/failure.service';
import {Failure} from '../../model/failure/failure.entity';

@Component({
  selector: 'app-audit-failure-list',
  imports: [
    FailureItemComponent,
    BtnGenerateReportComponent
  ],
  templateUrl: './audit-failure-list.component.html',
  styleUrl: './audit-failure-list.component.css'
})
export class AuditFailureListComponent implements OnInit {
  failures: Failure[] = [];

  constructor(private failureService: FailureService) {}

  ngOnInit() {
    const vehicleId = 1;

    this.failureService.getFailuresByVehicle(vehicleId).subscribe(data => {
      this.failures = data;
    });
  }
}
