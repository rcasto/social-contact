import commonConfig from './rollup.config';
import { terser } from 'rollup-plugin-terser';

const config = {
    ...commonConfig,
    output: [
		{
			file: 'dist/social-contact.min.js',
			format: 'iife'
		}
	]
};
config.plugins.push(terser());

export default config;