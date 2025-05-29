import { Component } from '@angular/core';
import {ShowCarComponent} from '../../../shared/components/show-car/show-car.component';
import {SimpleIssuesComponent} from '../../components/simple-issues/simple-issues.component';
import {BadPracticesComponent} from '../../components/bad-practices/bad-practices.component';
import {TechnicalErrorsComponent} from '../../components/technical-errors/technical-errors.component';

@Component({
  selector: 'app-tap-scan',
  imports: [
    ShowCarComponent,
    SimpleIssuesComponent,
    BadPracticesComponent,
    TechnicalErrorsComponent
  ],
  templateUrl: './tap-scan.component.html',
  styleUrl: './tap-scan.component.css'
})
export class TapScanComponent {

}
