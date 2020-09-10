import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ToggleComponent } from './toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

storiesOf('Toggle', module)
    .addDecorator(
        moduleMetadata({
            declarations: [ToggleComponent],
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
        'Toggle',
        () => ({
            template: `
            <app-toggle></app-toggle>
            `,
            props: {
                buttonConfig: '{text: "Login"}'
            }
        })
    );