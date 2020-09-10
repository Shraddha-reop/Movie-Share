import { Component, OnInit, Input } from '@angular/core';
import classnames from 'classnames';
import { AccountService } from 'src/app/services';
import { FormControl } from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isLoggedIn;

  darkTheme = new FormControl(false);
  constructor(private accountService: AccountService, private themeService: ThemeService) {

    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });

  }
  ngOnInit(): void {
  }
  
  logt() {
    this.accountService.logout();
  }
}



