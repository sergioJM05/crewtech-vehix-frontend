import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-subscription-plan',
  imports: [
    TranslatePipe
  ],
  templateUrl: './subscription-plan.component.html',
  styleUrl: './subscription-plan.component.css'
})
export class SubscriptionPlanComponent {

}
