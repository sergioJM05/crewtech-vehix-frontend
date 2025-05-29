import {Component, inject} from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,

} from '@angular/material/card';
import {MatFormField, MatInput,MatLabel} from '@angular/material/input';
import {TranslatePipe} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatAnchor} from '@angular/material/button';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user.entity';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {Router} from '@angular/router';
import {UserSingletonService} from '../../services/user.singleton.service';

@Component({
  selector: 'app-input-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardSubtitle,
    MatFormField,
    MatFormField,
    MatInput,
    MatLabel,
    TranslatePipe,
    FormsModule,
    MatAnchor,
    MatRadioGroup,
    MatRadioButton
  ],
  templateUrl: './input-card.component.html',
  styleUrl: './input-card.component.css'
})
export class InputCardComponent {
  registerMode: boolean = false;
  users: User[]=[];
  genders: string[]= ["male", "female"];
  // Variables for login
  dni: string = '';
  password: string = '';
  // Variables for register
  name: string = '';
  surname: string = '';
  email: string = '';
  phoneNumber: string = '';
  gender: string = '';

  private userService: UserService = inject(UserService);
  private router: Router = inject(Router);
  private userSingletonService = inject(UserSingletonService);


  /**
   * @summary This is the constructor of the InputCardComponent
   * It initializes the component and gets all users from the service
   * @author Julca Minaya Sergio Gino u202318274
   */
  constructor() {
    this.getAllUsers();
  }


  /**
   * @summary This method is used to change the mood of the login and register
   * @author Julca Minaya Sergio Gino u202318274
   */
  changeMoodLoginAndRegister() {
    this.registerMode = !this.registerMode;
  }


  /**
   * @summary This method is used to validate the login
   * and redirect the user to the home page
   * @author Julca Minaya Sergio Gino u202318274
   */
  validateLogin(){
    let validateAlert :boolean = false;
    let loggedInUser: User | null = null;

    for (const user of this.users) {
      if (user.dni === this.dni && user.password === this.password) {
        validateAlert = true;
        loggedInUser = user;
        break;

      }
    }
    if (validateAlert && loggedInUser) {
      this.userSingletonService.setLoggedInUser(loggedInUser);
      alert("Welcome " + loggedInUser.name + " to VEHIX");
      this.router.navigateByUrl('/home');
    } else {
      alert("Invalid DNI or Password");
    }
  }

  /**
   * @summary This method is used to create a new user account
   * in the register view
   * @author Julca Minaya Sergio Gino u202318274
   */
  createNewUserAccount(){
    if (!this.validateAccountExist() && this.validateDataComplete() && this.validateOnlyNumbers(this.dni)){
      const newUser: User={
        id: 0,
        name: this.name,
        lastName:  this.surname,
        email: this.email,
        password: this.password ,
        phone: this.phoneNumber ,
        dni: this.dni ,
        gender: this.gender
      }
      this.addUser(newUser);
      this.resetData();
      this.router.navigateByUrl('/subscription-plans');
    }else{
      alert("The account already exists or the data is incomplete");
    }
  }


  /**
   * @summary This method is used to validate if
   * the account already exists
   * @author Julca Minaya Sergio Gino u202318274
   */
  validateAccountExist(): boolean{
    let existAccount :boolean = false;
    this.users.forEach(user => {
      if (user.dni===this.dni || user.name===this.name || user.email===this.email) {
        existAccount = true;
      }
    })
    return existAccount;
  }

  /**
   * @summary This method is used to validate if
   * the data is complete in the register form
   * @author Julca Minaya Sergio Gino u202318274
   */
  validateDataComplete():boolean {
    return !(this.dni === '' || this.password === '' || this.name === '' || this.surname === '' || this.email === '' || this.phoneNumber === '' || this.gender==='');
  }


  /**
   * @summary This method is used to reset the data
   * in the register form
   * @author Julca Minaya Sergio Gino u202318274
   */
  private resetData(){
    this.name='';
    this.surname='';
    this.email='';
    this.password='';
    this.phoneNumber='';
    this.gender='';
    this.dni='';
  }

  /**
   * @summary This method is used to validate if the DNI
   * contains only numbers
   * @author Julca Minaya Sergio Gino u202318274
   */
  private validateOnlyNumbers(number:string){
    const regex = /^[0-9]+$/;
    if (regex.test(number))
    {
      return regex.test(number);
    }
    else {
      alert("The DNI must contain only numbers");
      return false;
    }

  }

  /**
   * @summary This method is used to get all users from the service
   * and store them in the users array
   * @author Julca Minaya Sergio Gino u202318274
   */
  private getAllUsers(){
    this.userService.getAllArrays().subscribe((response: User[]) => {
      this.users = response;
    })
  }


  /**
   * @summary This method is used to add a new user
   * to the service and reset the data
   * @author Julca Minaya Sergio Gino u202318274
   */
  addUser(user: User) {
    this.userService.create(user).subscribe({
      next: (response) => {
        alert("Welcome " + response.name + " to VEHIX");
        this.resetData();
        this.getAllUsers();
      },
      error: (error) => {
        alert("Error creating user, please try again.");
      }
    });
  }
}
