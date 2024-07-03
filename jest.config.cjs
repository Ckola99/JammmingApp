module.exports = {
	setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
};
