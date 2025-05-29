import {Component, inject} from '@angular/core';
import {MatCard, MatCardTitle} from '@angular/material/card';
import {TranslatePipe} from '@ngx-translate/core';
import {MatFormField, MatHint, MatInput, MatLabel} from '@angular/material/input';
import {UserSingletonService} from '../../../identity-and-guess-management/services/user.singleton.service';
import {User} from '../../../identity-and-guess-management/model/user.entity';
import {MatAnchor, MatButton} from '@angular/material/button';
import {UserService} from '../../../identity-and-guess-management/services/user.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  imports: [
    MatCardTitle,
    TranslatePipe,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    FormsModule
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

  buttonDesactivateEdit = true;

  // Variables for update Profile Information
  name: string = '';
  surname: string = '';
  password: string = '';
  phoneNumber: string = '';

  users: User[] = [];

  private userService: UserService = inject(UserService);
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
      console.log('Actual user', this.currentUser);
    });
  }

  /**
   * @summary This method is used to initialize the component
   * and get the current user information.
   * @author Julca Minaya Sergio Gino u202318274
   */
  changeToEditMode(){
    return this.buttonDesactivateEdit=!this.buttonDesactivateEdit;
  }


  updateUserInformation() {
    this.validateCompletedFields();

    if(!this.buttonDesactivateEdit && this.validateOnlyNumbers(this.phoneNumber)){
      this.updateUser();
      this.getAllUsers();
      this.buttonDesactivateEdit=false;
    }

  }

  validateCompletedFields(){
    if (this.name === '')
    {
      this.name = this.currentUser!.name;
    }else {
      this.currentUser!.name = this.name;
    }
    if (this.surname === '')
    {
      this.surname = this.currentUser!.lastName;
    }
    else {
      this.currentUser!.lastName = this.surname;
    }
    if (this.password === '')
    {
      this.password = this.currentUser!.password;
    }
    else {
      this.currentUser!.password = this.password;
    }
    if (this.phoneNumber === '' )
    {
      this.phoneNumber = this.currentUser!.phone;
    }
    else {
      this.currentUser!.phone = this.phoneNumber;
    }
  }

  private validateOnlyNumbers(number:string){
    const regex = /^[0-9]+$/;
    if (regex.test(number))
    {
      return regex.test(number);
    }
    else {
      alert("The Phone Number must contain only numbers");
      return false;
    }

  }


  private getAllUsers(){
    this.userService.getAllArrays().subscribe((response: User[]) => {
      this.users = response;
    })
  }

  private updateUser() {
    this.userService.update(this.currentUser?.id, this.currentUser as User).subscribe((response: User) => {
      this.currentUser = response;
      this.userSingletonService.setLoggedInUser(response);
      console.log('User updated successfully', response);
    })
  }
}
