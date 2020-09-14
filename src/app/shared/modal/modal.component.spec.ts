import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '../button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ModalComponent } from './modal.component';

describe('CardComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModalComponent, ButtonComponent],
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
                })
              ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
