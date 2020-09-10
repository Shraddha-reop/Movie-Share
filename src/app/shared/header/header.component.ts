import { Component, OnInit, Input} from '@angular/core';
import classnames from 'classnames';
import { AccountService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isLoggedIn;

  constructor(private accountService: AccountService) { }
  ngOnInit(): void {
  }

  // logout() {
  //   this.accountService.logout();
  // }
}



