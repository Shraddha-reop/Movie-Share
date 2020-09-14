import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

storiesOf('Button', module)
    .addDecorator(
        moduleMetadata({
            declarations: [ButtonComponent],
            imports: []
        })
    )
    .add(
        'Text-Button',
        () => ({
            template: `
                <sa-button  [buttonConfig]="{text: 'Login'}" ></sa-button>
            `,
            props: {
                buttonConfig: '{text: "Login"}'
            }
        })
    )
    .add(
        'Image-Button-Update',
        () => ({
            template: `
                <sa-button  [buttonConfig]="{src: '../../../assets/svg/update.svg'}" ></sa-button>
            `,
            props: {
                buttonConfig: '{src: "../../../assets/svg/update.svg"}'
            }
        })
    )
    .add(
        'Image-Button-Delete',
        () => ({
            template: `
                <sa-button  [buttonConfig]="{src: '../../../assets/svg/delete.svg'}" ></sa-button>
            `,
            props: {
                buttonConfig: '{src: "../../../assets/svg/delete.svg"}'
            }
        })
    );
