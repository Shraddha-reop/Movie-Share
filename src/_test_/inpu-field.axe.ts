import { OrxeInputField } from '../index';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';

expect.extend(toHaveNoViolations);

describe('orxe-input-field', () => {
  let inputField;

  beforeEach(function () {
    OrxeInputField;
    document.body.appendChild(document.createElement('orxe-input-field'));
    inputField = document.querySelector('orxe-input-field') as OrxeInputField;
  });

  afterEach(function () {
    inputField.remove();
  });

  it('should support all WCAG Accessibility Rules. when component is rendered', async () => {
    // pass the HTML element into the axe function.
    const results = await axe(inputField);
    expect(results).toHaveNoViolations();
  });

  it('should support all WCAG Accessibility Rules. when closeIconAriaLabel is given', async () => {
    inputField.closeIcon = true;
    inputField.a11yCloseLabel = 'close icon';
    inputField.state = 'active';
    await inputField.requestUpdate();
    const results = await axe(inputField);
    expect(results).toHaveNoViolations();
  });

  it('should support all WCAG Accessibility Rules. when state is given', async () => {
    inputField.state = 'default';
    await inputField.requestUpdate();
    const results = await axe(inputField);
    expect(results).toHaveNoViolations();
  });
});
