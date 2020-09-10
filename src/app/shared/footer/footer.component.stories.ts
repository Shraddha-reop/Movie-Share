import { storiesOf, moduleMetadata } from '@storybook/angular';
import { FooterComponent } from './footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

storiesOf('Footer', module)
    .addDecorator(
        moduleMetadata({
            declarations: [FooterComponent],
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
    )
    .add(
        'Footer',
        () => ({
            template: `
                <app-footer></app-footer>
            `
        })
    );
   