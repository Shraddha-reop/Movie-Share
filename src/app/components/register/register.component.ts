import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.model';
import { selectModal } from 'src/app/store/app.selector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  public error;
  submitted = false;
  public modal = true;
  public selectData$: Observable<any> = this.store.select(selectModal);


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    public store: Store<AppState>
  ) { }

  ngOnInit() {
    this.selectData$.subscribe(data => {
      this.modal = data;
    });
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  get f() { return this.form.controls; }

  onPinModalClose() {
    this.modal = false;
  }


  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.modal = false;
          this.router.navigate(['/login'], { relativeTo: this.route });
        },
        error: error => {
          this.error = error;
        }
      });
  }
}