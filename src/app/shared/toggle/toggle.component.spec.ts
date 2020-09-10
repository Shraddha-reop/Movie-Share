import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ToggleComponent } from './toggle.component';
import { AppState } from 'src/app/app.model';

describe('HeaderComponent', () => {
    let component: ToggleComponent;
    let fixture: ComponentFixture<ToggleComponent>;
    //   let formGroupDirective: Partial<FormGroupDirective>;
    //   const formBuilder: FormBuilder = new FormBuilder();



    beforeEach(async () => {
        // formGroupDirective = {
        //     form: new FormGroup({})
        //   };

        await TestBed.configureTestingModule({
            declarations: [ToggleComponent],
            imports: [
                ReactiveFormsModule],
            providers: [
                //   provideMockStore({
                //     initialState: {
                //       appModel: {
                //         data: [],
                //         isLoggedIn: false,
                //         requestBody: {},
                //         id: 1
                //       }
                //     }
                //   }),
                //   { provide: FormGroupDirective, useValue: formGroupDirective },
                //   { provide: FormBuilder, useValue: formBuilder },
            ],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ToggleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        const control = new FormControl('old value');
        fixture.componentInstance.formControl = control;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
