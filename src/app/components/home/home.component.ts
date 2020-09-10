import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.model';
import { selectData } from 'src/app/store/app.selector';
import { AccountService } from 'src/app/services';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit  {

  public time;
  public selectData$: Observable<any> = this.store.select(selectData);

  constructor(
    private router: Router,
    public store: Store<AppState>,
    public accountService: AccountService) { }

    @ViewChild(ButtonComponent) chviewChild: ButtonComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(this.chviewChild);
  }

  timerGame() {
    console.log('Ready....go!');
    setTimeout(() => {
   this.time = "Shraddha";
    }, 1000);
  }


}
