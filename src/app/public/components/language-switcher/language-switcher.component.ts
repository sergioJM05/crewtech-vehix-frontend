import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-language-switcher',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})

/**
 * @summary LanguageSwitcherComponent is a component that
 * allows users to switch between different
 * languages in the application.
 * @author Julca Minaya, Sergio Gino u202318274
 */
export class LanguageSwitcherComponent {
  protected languages: string[]=['en','es'];
  protected currentLanguage: string = 'en';

  /**
   * @summary this constructor is used to
   * inject the TranslateService
   * @param translate
   * @author Julca Minaya, Sergio Gino u202318274
   */
  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.currentLang;
  }

  /**
   * @summary This method is used to set
   * the language of the application.
   * @param language
   * @author Julca Minaya, Sergio Gino u202318274
   */
  useLanguage(language: string):void {
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
