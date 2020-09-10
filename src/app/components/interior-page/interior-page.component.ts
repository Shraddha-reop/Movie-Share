import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.model';
import { selectIsLoggedIn } from 'src/app/store/app.selector';
import { AccountService } from 'src/app/services';

@Component({
  selector: 'app-interior-page',
  templateUrl: './interior-page.component.html',
  styleUrls: ['./interior-page.component.scss']
})
export class InteriorPageComponent implements OnInit {
  public isLoggedIn;
  public selectIsLoggedIn$: Observable<boolean> = this.store.select(selectIsLoggedIn);
  constructor(public store: Store<AppState>, private accountService: AccountService) { 
    this.selectIsLoggedIn$.subscribe(val => {
      this.isLoggedIn = val;
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.accountService.logout();
  }

}
