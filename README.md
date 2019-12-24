# Social Contact Web Component
A web component that displays your contact information across the most popular social networks.

The following social networks are currently supported:
- Twitter
- LinkedIn
- Facebook
- Instagram (haven't added yet)
- GitHub

The component itself renders like below:  
![Social Contact Rendered Screenshot](./images/social-contact-screenshot.png)

Each one of the social profile links will open in a new tab when clicked.

## Integration
Include the following script tag on your web page:
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/rcasto/social-contact@master/src/social-contact.mjs"></script>
```

## Usage
```html
<social-contact
    github="your-github-username"
    linkedin="your-linkedin-username"
    twitter="your-twitter-username"
    facebook="your-facebook-username"
    instagram="your-instagram-username">
</social-contact>
```

If any of these properties is omitted, then that social contact method is simply not rendered.

For each of the social contact methods, all you need to provide to the web component property is the username associated with the profile.

## References
- https://brand.linkedin.com/downloads
- https://en.facebookbrand.com/facebookapp/
- https://github.com/logos
- https://about.twitter.com/en_us/company/brand-resources.html
- https://en.instagram-brand.com/assets/icons