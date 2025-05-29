import { Component } from '@angular/core';
import {StatusService} from '../../services/status.service';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-status',
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent{
  status: any;
  constructor(private statusService: StatusService) {
    this.statusService.getStatus().subscribe((status: any) => {
      this.status = status;
      console.log(this.status);
    });
  }
}
