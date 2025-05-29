import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { BadPracticeService } from '../../services/bad-practices/bad-practice.service';

@Component({
  selector: 'app-bad-practices',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule],
  templateUrl: './bad-practices.component.html',
  styleUrls: ['./bad-practices.component.css']
})
export class BadPracticesComponent implements OnInit {
  badPractices: any[] = [];

  constructor(private service: BadPracticeService) {}

  ngOnInit(): void {
    this.service.getAllBadPractices().subscribe(data => {
      this.badPractices = data;
    });
  }
}
