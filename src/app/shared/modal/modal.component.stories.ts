import { storiesOf, moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ModalComponent } from './modal.component';

storiesOf('Modal', module)
    .addDecorator(
        moduleMetadata({
            declarations: [ModalComponent],
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
        'Defult',
        () => ({
            template: `
            <app-modal [showModal]="showModal" [title]="title"></app-modal>
            `,
            props: {
                title: 'Modal Title',
                showModal: true
            }
        })
    );
