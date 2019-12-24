const templateContent = `
  <style>
    .social-contact-container {
      display: flex;
      padding: 16px;
    }
    .social-contact-container a {
        margin-right: 16px;
    }
    .social-contact-container a:last-of-type {
        margin-right: 0;
    }
    .social-contact-container img {
        height: 32px;
    }
  </style>
  <div class="social-contact-container"></div>
`;

const template = document.createElement('template');
template.innerHTML = templateContent;

function constructSocialContact(socialContact) {
    const socialAnchor = document.createElement('a');
    socialAnchor.href = socialContact.profile;
    socialAnchor.target = '_blank';

    const socialImage = document.createElement('img');
    socialImage.src = socialContact.brandImage;

    socialAnchor.appendChild(socialImage);

    return socialAnchor;
}

function constructGithubContact(username) {
    return {
        brandImage: '../images/github.png',
        profile: `https://github.com/${username}`
    };
}

function constructLinkedinContact(username) {
    return {
        brandImage: '../images/linkedin.png',
        profile: `https://www.linkedin.com/in/${username}`
    };
}

function constructTwitterContact(username) {
    return {
        brandImage: '../images/twitter.png',
        profile: `https://twitter.com/${username}`
    };
}

function constructFacebookContact(username) {
    return {
        brandImage: '../images/facebook.png',
        profile: `https://www.facebook.com/${username}`
    };
}

function constructInstagramContact(username) {
    return {
        brandImage: '../images/instagram.png',
        profile: `https://www.instagram.com/${username}`
    };
}

class SocialContact extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({
      mode: 'open'
    });
    const socialContactTemplateClone = template.content.cloneNode(true);
    const socialContactContainer = socialContactTemplateClone.querySelector('.social-contact-container');

    const github = this.getAttribute('github') || '';
    const linkedin = this.getAttribute('linkedin') || '';
    const twitter = this.getAttribute('twitter') || '';
    const facebook = this.getAttribute('facebook') || '';
    const instagram = this.getAttribute('instagram') || '';

    const socialContacts = [];

    if (github) {
        socialContacts.push(constructGithubContact(github));
    }
    if (linkedin) {
        socialContacts.push(constructLinkedinContact(linkedin));
    }
    if (twitter) {
        socialContacts.push(constructTwitterContact(twitter));
    }
    if (facebook) {
        socialContacts.push(constructFacebookContact(facebook));
    }
    if (instagram) {
        socialContacts.push(constructInstagramContact(instagram));
    }

    if (socialContacts.length) {
        socialContacts
            .forEach(socialContact => {
                const socialContactElem = constructSocialContact(socialContact);
                socialContactContainer.appendChild(socialContactElem);
            });
    } else {
        const socialContactText = document.createTextNode('No social profile information provided');
        socialContactContainer.appendChild(socialContactText);
    }

    shadowRoot.appendChild(socialContactTemplateClone);
  }
}

customElements.define('social-contact', SocialContact);