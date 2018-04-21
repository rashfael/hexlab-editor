module.exports = {
	root: true,
	extends: [
		"plugin:vue/essential",
		"@vue/standard"
	],
	parserOptions: {
		source_type: 'module',
		parser: 'babel-eslint'
	},
	rules: {
		indent: [2, 'tab', { "SwitchCase": 1 }],
		'no-tabs': 0,
		'comma-dangle': 0, //perhaps always?
		'curly': 0,
		'no-return-assign': 0
	}
}
