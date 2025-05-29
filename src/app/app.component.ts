import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatAnchor, MatIconButton} from '@angular/material/button';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';
import {MatIcon} from '@angular/material/icon';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarRow,
    LanguageSwitcherComponent,
    MatToolbar,
    MatAnchor,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    RouterOutlet,
    MatIcon,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

/**
 * @summary AppComponent is the main
 * component of the application,
 * that contain the main-routes
 * @author Julca Minaya Sergio Gino U202318274
 */
export class AppComponent {
  navBarOpen = false;
  showNavBar = true;

  title = 'crewtech-vehix-frontend';
  options=[
    {link: '/home',label: 'home', icon: 'home'},
    {link: '/sync',label: 'sync' , icon: 'sync'},
    {link: '/library',label: 'library',icon:'library_books'},
    {link: '/maintenance',label: 'maintenance', icon: 'directions_car'},
    {link: '/profile',label: 'profile', icon: 'perm_identity'},
  ]

  /**
   * @summary Injects the TranslateService into the constructor
   * @param translate TranslateService
   * @author Julca Minaya Sergio Gino U202318274
   */
  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.showNavBar = !(
        event.urlAfterRedirects.includes('/registration') ||
        event.urlAfterRedirects.includes('/subscription-plan')
      );
    });
  }
}

