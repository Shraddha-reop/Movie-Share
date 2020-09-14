import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.model';
import { IsLoggedIn, UserLogin } from 'src/app/store/app.actions';
import { Observable } from 'rxjs';
import { selectModal } from '../../store/app.selector';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    public error;
    public selectData$: Observable<any> = this.store.select(selectModal);

    public modal = true;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private accountService: AccountService,
        public store: Store<AppState>
    ) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.selectData$.subscribe(data => {
            this.modal = data;
            console.log(data);
        });
    }

    OpenModal() {
        this.modal = true;
    }

    onPinModalClose() {
        this.modal = false;
    }


    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }

        this.accountService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.modal = false;
                    this.router.navigate(['/login-user']);
                    this.store.dispatch(new IsLoggedIn(true));
                },
                error: error => {
                    this.error = error;
                }
            });
    }
}
