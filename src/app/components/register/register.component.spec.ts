import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormGroupDirective, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppState } from 'src/app/app.model';
import { Store } from '@ngrx/store';
import { AccountService } from 'src/app/services';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let formGroupDirective: Partial<FormGroupDirective>;
  const formBuilder: FormBuilder = new FormBuilder();
  let store: MockStore<AppState>;
  let userService: AccountService;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    formGroupDirective = {
      form: new FormGroup({})
    };
    TestBed.configureTestingModule({
      declarations: [RegisterComponent, ModalComponent],
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
          },

        }),
        { provide: FormGroupDirective, useValue: formGroupDirective },
        { provide: FormBuilder, useValue: formBuilder },
        AccountService
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    store = TestBed.get(Store);
    userService = TestBed.inject(AccountService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get form controls', () => {
    const firstNameInput = component.form.controls.firstName;
    const lastNameInput = component.form.controls.lastName;
    const usernameInput = component.form.controls.username;
    const passwordInput = component.form.controls.password;
    firstNameInput.setValue('Sample1');
    lastNameInput.setValue('Sample2');
    usernameInput.setValue('Movie Title');
    passwordInput.setValue('MovieDesc');
    expect(component.f.firstName.value).toEqual('Sample1');
    expect(component.f.lastName.value).toEqual('Sample2');
    expect(component.f.username.value).toEqual('Movie Title');
    expect(component.f.password.value).toEqual('MovieDesc');
  });


  it('should onSubmit user', () => {
    const spy = jest.spyOn(TestBed.inject(Store), 'dispatch');
    component.onSubmit();
    expect(component.submitted).toEqual(true);
    const firstNameInput = component.form.controls.firstName;
    const lastNameInput = component.form.controls.lastName;
    const usernameInput = component.form.controls.username;
    const passwordInput = component.form.controls.password;
    usernameInput.setValue('Movie Title');
    passwordInput.setValue('MovieDesc');
    firstNameInput.setValue('Sample1');
    lastNameInput.setValue('Sample1');
    expect(component.form.valid).toBeTruthy();
    expect(component.submitted).toEqual(true);
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
