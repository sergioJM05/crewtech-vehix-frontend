import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-show-car',
  imports: [],
  templateUrl: './show-car.component.html',
  styleUrl: './show-car.component.css'
})
export class ShowCarComponent {

  @Input() sectionTitle: string='';
  @Input() nameCar: string='';
  @Input() imageCar: string='';

  constructor() {
  }

}
