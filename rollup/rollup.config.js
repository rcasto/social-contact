import babel from 'rollup-plugin-babel';

const config = {
	input: 'src/social-contact.js',
	plugins: [babel()],
};

export default config;