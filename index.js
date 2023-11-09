module.exports = {
    env: {
		"browser": true,
		"es2021": true,
		"node": true
	},
    // eslint-configs
    extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"plugin:tailwindcss/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"next",
		"next/core-web-vitals"
	],
    // eslint-plugins
    plugins: [
		"jsx-a11y",
		"@typescript-eslint",
		"import",
		"prettier",
		"react-hooks",
		"react",
		"tailwindcss"
	],
    // enabling/disabling/changing level of rules
    parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: "module"
	},
	ignorePatterns: [
		".next/**/*.*",
		"node_modules/**/*.*"
	],
	settings: {
		react: {
			version: "detect"
		}
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				"bracketSpacing": false,
				"endOfLine": "auto",
				"printWidth": 100,
				"semi": true,
				"singleQuote": true
			}
		],
		"@typescript-eslint/consistent-type-imports": "error",
		// disabled tailwindcss/no-custom-classname because it isn't loading the tailwind.config.js file
		"tailwindcss/no-custom-classname": "off",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				"varsIgnorePattern": "^_.*$"
			}
		],
		"react/react-in-jsx-scope": "off",
		"react/jsx-uses-react": "off",
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }]
	}
  };