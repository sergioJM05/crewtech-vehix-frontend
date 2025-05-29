import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserSingletonService {
  private loggedInUserSubject: BehaviorSubject<User|null>= new BehaviorSubject<User|null>(null);
  public loggedInUser: Observable<User|null>=this.loggedInUserSubject.asObservable()
  constructor() {}
  setLoggedInUser(user: User):void{
    this.loggedInUserSubject.next(user);
  }
  getLoggedInUser(): User|null {
    return this.loggedInUserSubject.value;
  }

  logout(): void {
    this.loggedInUserSubject.next(null);
  }
}
