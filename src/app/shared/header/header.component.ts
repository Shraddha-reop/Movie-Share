import { Component, OnInit, Input } from '@angular/core';
import classnames from 'classnames';
import { AccountService } from 'src/app/services';
import { FormControl } from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.model';
import { ShowModel } from 'src/app/store/app.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isLoggedIn;

  darkTheme = new FormControl(false);
  constructor(
    private accountService: AccountService,
    private themeService: ThemeService,
    private router: Router,
    public store: Store<AppState>) {

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

  OnLogin() {
    this.router.navigate(['/login']);
    this.store.dispatch(new ShowModel(true));
  }

  logt() {
    this.accountService.logout();
  }
}



