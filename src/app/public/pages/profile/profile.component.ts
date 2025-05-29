import {Component, inject} from '@angular/core';
import {ProfileCardComponent} from '../../../profiles-and-references/components/profile-card/profile-card.component';
import {UserSingletonService} from '../../../identity-and-guess-management/services/user.singleton.service';
import {User} from '../../../identity-and-guess-management/model/user.entity';

@Component({
  selector: 'app-profile',
  imports: [
    ProfileCardComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
}
