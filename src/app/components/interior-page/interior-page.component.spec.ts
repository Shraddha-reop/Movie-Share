import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorPageComponent } from './interior-page.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('InteriorPageComponent', () => {
  let component: InteriorPageComponent;
  let fixture: ComponentFixture<InteriorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteriorPageComponent, HeaderComponent],
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
        ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
