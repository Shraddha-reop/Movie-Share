/**
 * @packageDocumentation
 * @module OrxeInputField
 */

import { html, customElement, property } from 'lit-element';
import styles from './input-field-css';
import { TranslationClass } from '@orxe-culture/lit';
import '@orxe-components/button';

/**
 * @noInheritDoc
 */
@customElement('orxe-input-field')
export default class OrxeInputField extends TranslationClass {
  /**
   *
   * @memberof OrxeInputField
   * This is used to give the type of a state of input field
   */
  @property({ type: String, reflect: true, attribute: 'state' })
  state = 'default';

  /**
   *
   * @memberof OrxeInputField
   * this property is used to show  label of input field
   */
  @property({ type: String, reflect: true, attribute: 'field-label' })
  label = "Default";

  /**
   *
   * @memberof OrxeInputField
   * This property will set the close icon when state of input field is active
   */


  @property({ type: Boolean, reflect: true, attribute: 'close-icon' })
  closeIcon = false;

  /**
   *
   * @memberof OrxeInputField
   * This property will set the aria-label for close icon
   */

  @property({ type: String, reflect: true, attribute: 'a11y-close-label' })
  a11yCloseLabel = '';


  /**
     *
     * @memberof OrxeInputField
     * This property will set the error message for inpur field
     */

  @property({ type: Boolean, reflect: true, attribute: 'error-message' })
  error = false;

  /**
     *
     * @memberof OrxeInputField
     * This property will set the value of the input field 
     */

    @property({ type: String, reflect: true, attribute: 'value' })
    value = '';


  render() {
    return html`
    <div data-testid="input-field-container"  class="input-field"  state=${this.state}>
    <label class = "field-label" for="field-label">${this.label}</label>
   <input class="form-control"  placeholder = "Placeholder" type="text" aria-label="text" value = ${this.value}> ${this._renderCloseIcon()}
    </div>
    ${this._renserErrorMessage()}
    `;
  }

  /**
   * This method render the close icon if the input field is active
   */
  private _renserErrorMessage() {
    if (this.state === 'error') {
      return html` <p class = "error__message">Error Message</p>`
    }
  }

  private _renderCloseIcon() {
    if (this.state === 'active' && this.closeIcon) {
      return html`
        <orxe-button
          class="button__icon--close"
          kind="iconOnly"
          icon="ic-close"
          icon-size="small"
          a11y-label=${this.a11yCloseLabel}
          data-testid="close-icon"
          @click=${this._clearInputField}
        >
        </orxe-button>
      `;
    }
  }
  private _clearInputField(): void {
    this.value = '';
  }
  static styles = styles;
}
