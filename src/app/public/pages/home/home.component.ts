import {Component, inject, OnInit} from '@angular/core';
import {UserSingletonService} from '../../../identity-and-guess-management/services/user.singleton.service';
import {User} from '../../../identity-and-guess-management/model/user.entity';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private userSingletonService: UserSingletonService = inject(UserSingletonService);
  currentUser: User | null = null;

  /**
   * @summary This is the constructor of the HomeComponent
   * It initializes the component and subscribes to the loggedInUser observable
   * to get the current user information.
   * @author Julca Minaya Sergio Gino u202318274
   */
  ngOnInit(): void {
    this.userSingletonService.loggedInUser.subscribe(user => {
      this.currentUser = user;
      console.log('Usuario actual en Home:', this.currentUser);
    });
  }

}
