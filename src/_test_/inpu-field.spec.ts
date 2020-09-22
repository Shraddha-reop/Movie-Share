import { OrxeInputField } from '../index';
import '@testing-library/jest-dom';


describe('orxe-input-field', () => {
  let inputField;

  beforeEach(async function() {
    OrxeInputField;
    inputField = (await document.body.appendChild(document.createElement('orxe-input-field'))) as OrxeInputField;
  });

  afterEach(async function() {
    await inputField.remove();
  });

  /**
   * Function that sets properties on the Custom Element.
   */
  async function setProperties(properties: object): Promise<void> {
    for (const property in properties) {
      if (inputField.hasOwnProperty(property)) {
        inputField[property] = properties[property];
      }
    }
    await inputField.requestUpdate();
  }

  /**
   * Function that returns an element containing the testId data attribute.
   */
  function getByTestId(id: string): HTMLElement {
    return inputField.shadowRoot.querySelector(`[data-testid=${id}]`);
  }

  it('should check default value for properties for input field', () => {
    expect(inputField.state).toEqual('default');
    expect(inputField.closeIcon).toBeFalsy;
    expect(inputField.a11yCloseLabel).toEqual('');
  });

  it('Should check input field is default input field if no state is given', async () => {
    const inputFieldConatiner = getByTestId('input-field-container');
    expect(inputFieldConatiner).toHaveAttribute('state', 'default');
  });

  it('Should set  input field Type', async () => {
    await setProperties({ state: 'active' });
    const inputFieldConatiner = getByTestId('input-field-container');
    expect(inputFieldConatiner).toHaveAttribute('state', 'active');
  });

  it('Should set  input field Type', async () => {
    await setProperties({ state: 'error' });
    const inputFieldConatiner = getByTestId('input-field-container');
    expect(inputFieldConatiner).toHaveAttribute('state', 'error');
  });

  it('Should set  input field Type', async () => {
    await setProperties({ state: 'filled' });
    const inputFieldConatiner = getByTestId('input-field-container');
    expect(inputFieldConatiner).toHaveAttribute('state', 'filled');
  });

  it('Should set  input field Type', async () => {
    await setProperties({ state: 'on-focus' });
    const inputFieldConatiner = getByTestId('input-field-container');
    expect(inputFieldConatiner).toHaveAttribute('state', 'on-focus');
  });

  it('Should show close icon', async () => {
    await setProperties({ state: 'active', closeIcon: true });
    const closeIconContainer = getByTestId('close-icon');
    expect(closeIconContainer).toHaveClass('button__icon--close');
    expect(closeIconContainer).toHaveAttribute('a11y-label', '');

    await setProperties({ a11yCloseLabel: 'close' });
    expect(closeIconContainer).toHaveAttribute('a11y-label', inputField.a11yCloseLabel);
  });
});
