import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';

const config = {
	input: 'src/social-contact.js',
	plugins: [
		babel(),
		image()
	],
};

export default config;