import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-btn-generate-report',
  imports: [
    MatButton
  ],
  templateUrl: './btn-generate-report.component.html',
  styleUrl: './btn-generate-report.component.css'
})
export class BtnGenerateReportComponent {
  constructor(private router: Router) {}
  goToReportPage(): void {
    this.router.navigate(['/report']);
  }
}
