import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CardComponent } from './card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

storiesOf('Card', module)
    .addDecorator(
        moduleMetadata({
            declarations: [CardComponent],
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
        'Home-Page card',
        () => ({
            template: `
            <app-card title = 'Card Title' desc = 'Card Description' category = 'Category' year = 'Year'></app-card>
            `,
            props: {
                title: 'Card Title'
            }
        })
    )
    .add(
        'Login User Card',
        () => ({
            template: `
            <app-card title = 'Card Title' desc = 'Card Description' category = 'Category' year = 'Year' isLoggedIn = true></app-card>
            `,
            props: {
                title: 'Card Title'
            }
        })
    );
