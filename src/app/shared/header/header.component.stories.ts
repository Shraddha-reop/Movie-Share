import { storiesOf, moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';

storiesOf('Header', module)
    .addDecorator(
        moduleMetadata({
            declarations: [HeaderComponent],
            imports: [CommonModule]
        })
    )
    .add(
        'Normal-User',
        () => ({
            template: `
            <app-header [isLoggedIn] = "isLoggedIn" >
            </app-header>
            `,
            props: {
                isLoggedIn: false
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
