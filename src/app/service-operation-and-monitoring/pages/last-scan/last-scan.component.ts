import { Component } from '@angular/core';
import {AuditFailureListComponent} from "../../../assets-and-resource-management/components/audit-failure-list/audit-failure-list.component";
import {SystemStatusListComponent} from "../../../assets-and-resource-management/components/system-status-list/system-status-list.component";

@Component({
  selector: 'app-last-scan',
  imports: [
    AuditFailureListComponent,
    SystemStatusListComponent
  ],
  templateUrl: './last-scan.component.html',
  styleUrl: './last-scan.component.css'
})
export class LastScanComponent {

}
