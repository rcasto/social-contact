import babel from 'rollup-plugin-babel';

const config = {
	input: 'src/social-contact.mjs',
	plugins: [babel()],
};

export default config;