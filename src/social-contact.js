import instagramImage from '../images/instagram-min.png';
import facebookImage from '../images/facebook-min.png';
import githubImage from '../images/github-min.png';
import linkedinImage from '../images/linkedin-min.png';
import twitterImage from '../images/twitter-min.png';

const templateContent = `
  <style>
    .social-contact-container {
      display: flex;
      justify-content: center;
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
    socialAnchor.id = `social-contact-${socialContact.id}`;

    const socialImage = document.createElement('img');
    socialImage.src = socialContact.brandImage;

    socialAnchor.appendChild(socialImage);

    return socialAnchor;
}

function constructGithubContact(username) {
    return {
        id: 'github',
        brandImage: githubImage,
        profile: `https://github.com/${username}`
    };
}

function constructLinkedinContact(username) {
    return {
        id: 'linkedin',
        brandImage: linkedinImage,
        profile: `https://www.linkedin.com/in/${username}`
    };
}

function constructTwitterContact(username) {
    return {
        id: 'twitter',
        brandImage: twitterImage,
        profile: `https://twitter.com/${username}`
    };
}

function constructFacebookContact(username) {
    return {
        id: 'facebook',
        brandImage: facebookImage,
        profile: `https://www.facebook.com/${username}`
    };
}

function constructInstagramContact(username) {
    return {
        id: 'instagram',
        brandImage: instagramImage,
        profile: `https://www.instagram.com/${username}`
    };
}

export default class SocialContact extends HTMLElement {
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

/*
  Register or associate the web component
  with a <social-contact></social-contact> element
*/
try {
    customElements.define('social-contact', SocialContact);
  } catch(err) {
    // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#Exceptions
    console.error(err);
  }