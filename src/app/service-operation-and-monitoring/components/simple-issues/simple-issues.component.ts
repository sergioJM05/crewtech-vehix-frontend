import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SimpleIssuesService } from '../../services/simple-issues/simple-issues.service';

@Component({
  selector: 'app-simple-issues',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './simple-issues.component.html',
  styleUrls: ['./simple-issues.component.css']
})
export class SimpleIssuesComponent implements OnInit {
  issues: any[] = [];

  constructor(private service: SimpleIssuesService) {}

  ngOnInit(): void {
    this.service.getSimpleIssues().subscribe(data => {
      this.issues = data;
    });
  }

  getUrgencyClass(level: string): string {
    switch (level.toLowerCase()) {
      case 'critical': return 'dot-red';
      case 'moderate': return 'dot-yellow';
      case 'mild': return 'dot-green';
      default: return '';
    }
  }

  getIssueIcon(desc: string): string {
    const text = desc.toLowerCase();
    if (text.includes('tire')) return '🛞';
    if (text.includes('battery')) return '🔋';
    if (text.includes('oil')) return '🛢️';
    if (text.includes('coolant')) return '🧊';
    if (text.includes('air filter')) return '🌬️';
    if (text.includes('washer')) return '💧';
    return '❓';
  }
}
