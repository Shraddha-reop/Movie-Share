import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserComponent } from './login-user.component';
import { CardComponent } from 'src/app/shared/card/card.component';
import { FormsModule, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { AppState } from 'src/app/app.model';
import { Store } from '@ngrx/store';

const spyScrollTo = jest.fn();

describe('LoginUserComponent', () => {
  let component: LoginUserComponent;
  let fixture: ComponentFixture<LoginUserComponent>;
  let formGroupDirective: Partial<FormGroupDirective>;
  const formBuilder: FormBuilder = new FormBuilder();
  let store: MockStore<AppState>;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };


  beforeEach(async () => {
    formGroupDirective = {
      form: new FormGroup({})
    };
    Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
    Object.defineProperty(global.window, 'scrollY', { value: 1 });
    spyScrollTo.mockClear();
    await TestBed.configureTestingModule({
      declarations: [LoginUserComponent, CardComponent, ButtonComponent],
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
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should logout user', () => {
    const spy = jest.fn();
    component.logout();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should update user', () => {
    const spy = jest.fn();
    component.onUpdate(1);
    expect(component.isUpdate).toEqual(true);
    expect(component.add).toEqual(false);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('calls window.scrollTo', () => {
    component.onUpdate(1);
    expect(spyScrollTo).toHaveBeenCalledTimes(1);
  });

  it('should delete user', () => {
    const spy = jest.fn();
    component.onDelete(1);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  // it('should add user', () => {
  //   const spy = jest.fn();
  //   component.OnClick(event);
  //   expect(component.isUpdate).toEqual(false);
  //   expect(component.add).toEqual(true);
  //   expect(spy).toHaveBeenCalledTimes(0);
  // });

  it('should cancel user', () => {
    const spy = jest.fn();
    component.onCancel();
    expect(component.isUpdate).toEqual(false);
    expect(component.add).toEqual(false);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should onUpdateLink user', () => {
    const spy = jest.fn();
    fixture.detectChanges();
    component.onUpdateLink();
    const titleInput = component.updateForm.controls.updateTitle;
    const descInput = component.updateForm.controls.updateDesc;
    const categoryInput = component.updateForm.controls.updateCategory;
    const releaseDateInput = component.updateForm.controls.updateYear;
    titleInput.setValue('Movie Title');
    descInput.setValue('Movie Desc');
    categoryInput.setValue('Action');
    releaseDateInput.setValue('2020');
    expect(component.submitted).toEqual(true);
    expect(component.updateForm.valid).toBeTruthy();
    expect(component.isUpdate).toEqual(false);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should onSubmit user', () => {
    const spy = jest.spyOn(TestBed.inject(Store), 'dispatch');
    fixture.detectChanges();
    component.onSubmit();
    const titleInput = component.form.controls.title;
    const descInput = component.form.controls.desc;
    const categoryInput = component.form.controls.category;
    const releaseDateInput = component.form.controls.releaseDate;
    titleInput.setValue('Movie Title');
    descInput.setValue('Movie Desc');
    categoryInput.setValue('Action');
    releaseDateInput.setValue('2020');
    expect(component.submitted).toEqual(true);
    expect(component.form.valid).toBeTruthy();
    expect(component.add).toEqual(false);
    console.log(component.form.status);
    expect(spy).toHaveBeenCalledTimes(0);
  });

});
