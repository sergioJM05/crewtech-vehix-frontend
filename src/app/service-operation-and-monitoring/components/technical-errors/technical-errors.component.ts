import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TechnicalErrorService } from '../../services/technical-errors/technical-errors.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-technical-errors',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './technical-errors.component.html',
  styleUrls: ['./technical-errors.component.css']
})
export class TechnicalErrorsComponent implements OnInit {
  errors: any[] = [];

  constructor(private service: TechnicalErrorService, private router: Router) {}

  ngOnInit(): void {
    this.service.getTechnicalErrors().subscribe(data => {
      this.errors = data;
    });
  }

  getUrgencyClass(level: string): string {
    switch (level.toLowerCase()) {
      case 'critical': return 'critical';
      case 'moderate': return 'moderate';
      case 'mild': return 'mild';
      default: return '';
    }
  }

  openMechanicPage() {
    this.router.navigate(['/maintenance/mechanic']);
  }

}
