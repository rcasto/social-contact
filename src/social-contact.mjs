const templateContent = `
  <style>
    .readability-container {
      display: flex;
      flex-direction: column;
    }
    .readability-container * {
      margin-left: auto;
    }
  </style>
  <div class="readability-container">
    <div class="readability-level"></div>
    <div class="readability-time"></div>
  </div>
  <slot name="readable-text"></slot>
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

customElements.define('read-ability', Readability);