import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatRipple} from '@angular/material/core';
@Component({
  selector: 'app-sync',
  imports: [
    MatCard,
    MatIcon,
    MatRipple
  ],
  templateUrl: './sync.component.html',
  styleUrl: './sync.component.css'
})
export class SyncComponent {

}
