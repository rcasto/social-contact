import commonConfig from './rollup.config';

const config = {
    ...commonConfig,
    output: [
		{
			file: 'dist/social-contact.js',
			format: 'iife',
			name: 'SocialContact'
		}
	]
};

export default config;