# Social Contact Web Component
A web component that displays your contact information across the most popular social networks.

The following social networks are currently supported:
- Twitter
- LinkedIn
- Facebook
- Instagram
- GitHub

The component itself renders like below:  
![Social Contact Rendered Screenshot](./images/social-contact-screenshot.png)

Each one of the social profile links will open in a new tab when clicked.

[Try it out yourself! (codepen)](https://codepen.io/rcasto/full/zYvdJqV)

## Usage
```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Social Contact - Web Component</title>
    <style>
        social-contact {
            display: block;
            width: 320px;
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <social-contact
        github="rcasto"
        linkedin="rcasto">
    </social-contact>

    <script src="https://cdn.jsdelivr.net/npm/social-contact@1.0.1/dist/social-contact.min.js"></script>
    <script>
        window.addEventListener('load', () => {
            // Register the custom element under the name 'social-contact', or name
            // of your choosing, it must have a '-' in it.
            //
            // It will then be usable, in this case via:
            // <social-contact></social-contact> as seen above
            customElements.define('social-contact', SocialContact);
        });
    </script>
</body>

</html>
```

If any of these properties is omitted, then that social contact method is simply not rendered.

For each of the social contact methods, all you need to provide to the web component property is the username associated with the social network profile.

## References
- https://brand.linkedin.com/downloads
- https://en.facebookbrand.com/facebookapp/
- https://github.com/logos
- https://about.twitter.com/en_us/company/brand-resources.html
- https://en.instagram-brand.com/assets/icons