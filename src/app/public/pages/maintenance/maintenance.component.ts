import { Component } from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {TranslateService} from '@ngx-translate/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatAnchor} from '@angular/material/button';

@Component({
  selector: 'app-maintenance',
  imports: [
    MatList,
    MatListItem,
    RouterLinkActive,
    RouterLink,
    RouterOutlet


  ],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent {
  options=[
    {link: 'problem-forecasting',label: 'Problem Forecasting'},
    {link: 'car-useful-life',label: 'Car Useful Life' },
    {link: 'rapid-diagnostic',label: 'Rapid Diagnostic'},
    {link: 'recents-repairs', label: 'Recent Repairs'},
    {link: 'last-scan', label: 'Last Scan'},
    {link: 'about-your-vehicle', label: 'About Your Vehicle'},
  ]


  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
