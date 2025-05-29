import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {PronosticsService} from '../../services/pronostics.service';

Chart.register(...registerables);

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {
  pronostics: any;
  constructor(private pronosticsService: PronosticsService) {
    this.pronosticsService.getPronostics().subscribe((pronostics: any) => {
      this.pronostics = pronostics;
      console.log(this.pronostics);
    });


}
  @ViewChild('radarCanvas', { static: true }) radarCanvas!: ElementRef;

  ngOnInit(): void {
    const data = {
      labels: ['Suspension', 'Transmission', 'Engine', 'Steering', 'Cooling', 'Electronics', 'Fuel', 'Brake' ],
      datasets: [{
        label: 'System State',
        data: [80, 75, 78, 85, 70, 65, 80, 90],
        fill: true,
        backgroundColor: 'rgb(192,192,192)',
        borderColor: 'rgb(105,105,105)',
        pointBackgroundColor: 'rgb(128,128,128)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    };

    const config = {
      type: 'radar' as const,
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    };

    new Chart(this.radarCanvas.nativeElement, config);
  }
}
