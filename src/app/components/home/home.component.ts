import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.model';
import { selectData, selectIsLoggedIn } from 'src/app/store/app.selector';
import { AccountService } from 'src/app/services';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { IsLoggedIn, FetchUserData } from 'src/app/store/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {


  name = 'Angular and LitElement';
  public time;
  public selectIsLoggedIn$: Observable<boolean> = this.store.select(selectIsLoggedIn);
  public selectData$: Observable<any> = this.store.select(selectData);


  constructor(
    private accountService: AccountService,
    private router: Router,
    public store: Store<AppState>) {
    this.store.dispatch(new IsLoggedIn(false));
    this.store.dispatch(new FetchUserData());
  }

  @ViewChild(ButtonComponent) chviewChild: ButtonComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
