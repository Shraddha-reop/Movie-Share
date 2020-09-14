import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormGroupDirective, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppState } from 'src/app/app.model';
import { Store } from '@ngrx/store';
import { AccountService } from 'src/app/services/account.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formGroupDirective: Partial<FormGroupDirective>;
  const formBuilder: FormBuilder = new FormBuilder();
  let store: MockStore<AppState>;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    formGroupDirective = {
      form: new FormGroup({})
    };
    TestBed.configureTestingModule({
      declarations: [LoginComponent,ModalComponent],
      imports: [FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule],
      providers: [
        provideMockStore({
          initialState: {
            appModel: {
              data: [],
              isLoggedIn: false,
              requestBody: {},
              id: 1
            }
          }
        }),
        { provide: FormGroupDirective, useValue: formGroupDirective },
        { provide: FormBuilder, useValue: formBuilder },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get form controls', () => {
    console.log(component.form.controls);
    const usernameInput = component.form.controls.username;
    const passwordInput = component.form.controls.password;
    usernameInput.setValue('Movie Title');
    passwordInput.setValue('MovieDesc');
    expect(component.f.username.value).toEqual('Movie Title');
    expect(component.f.password.value).toEqual('MovieDesc');
  });


  it('should onSubmit user', () => {
    const spy = jest.spyOn(TestBed.inject(Store), 'dispatch');
    component.onSubmit();
    expect(component.submitted).toEqual(true);
    const usernameInput = component.form.controls.username;
    const passwordInput = component.form.controls.password;
    usernameInput.setValue('Movie Title');
    passwordInput.setValue('MovieDesc');
    expect(component.form.valid).toBeTruthy();
    expect(component.submitted).toEqual(true);
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
