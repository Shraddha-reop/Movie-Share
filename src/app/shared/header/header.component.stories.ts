import { storiesOf, moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ToggleComponent } from '../toggle/toggle.component';
import { ButtonComponent } from '../button/button.component';

storiesOf('Header', module)
    .addDecorator(
        moduleMetadata({
            declarations: [HeaderComponent, ToggleComponent, ButtonComponent],
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
        'Normal-User',
        () => ({
            template: `
            <app-header  [isLoggedIn] = false>
            </app-header>
            `,
            props: {
                isLoggedIn: true
            }
        })
    )
    .add(
        'Logged-In-User',
        () => ({
            template: `
            <app-header [isLoggedIn] = "isLoggedIn"> 
            </app-header>
            `,
            props: {
                isLoggedIn: true
            }
        })
    );
