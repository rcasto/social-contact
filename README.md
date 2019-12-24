# Social Contact Web Component
A web component that displays your contact information across the most popular social networks.

## Supported Social Contact Methods
- Twitter
- LinkedIn
- Facebook
- Instagram (haven't added yet)
- GitHub

## Usage
```html
<social-contact
    github="your-github-username"
    linkedin="your-linkedin-username"
    twitter="your-twitter-handle"
    facebook="your-facebook-username">
</social-contact>
```

If any of these properties is omitted, then that social contact method is simply not rendered.

For each of the social contact methods, all you need to provide to the web component property is the username associated with the profile.