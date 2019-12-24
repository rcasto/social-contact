const templateContent = `
  <style>
    .social-contact-container {
      display: flex;
    }
  </style>
  <div class="social-contact-container"></div>
`;

const template = document.createElement('template');
template.innerHTML = templateContent;

class SocialContact extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({
      mode: 'open'
    });
    const templateClone = template.content.cloneNode(true);

    shadowRoot.appendChild(templateClone);
  }
}

customElements.define('social-contact', SocialContact);