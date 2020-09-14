import {LitElement, html, customElement, property} from 'lit-element';

console.log('hello-world module');

@customElement('hello-world')
export class HelloElement extends LitElement {

  @property() name;

  render() {
    return html`<div>Hello ${this.name}</div>`;
  }
}