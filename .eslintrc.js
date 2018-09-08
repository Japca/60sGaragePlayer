module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': ['eslint:recommended', 'plugin:node/recommended','plugin:react/recommended'],
    'parserOptions': {
        'ecmaVersion': 6,
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true,

        },
        'sourceType': 'module'
    },
    'plugins': [
        'react',
    ],
    'rules': {
        'linebreak-style': [
            'error',
            'unix'
        ],
        'indent': [
            'error', 4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-debugger': [
            'warn'
        ],
        'no-mixed-spaces-and-tabs': [
            'error',
        ],
        'node/no-unpublished-require': ['error', {
            'allowModules': [
                'webpack',
                'webpack-dev-middleware',
                'webpack-merge',
                'clean-webpack-plugin',
                'html-webpack-plugin'
            ],
        }],
        'node/no-unsupported-features/es-syntax': ['error', {
            'ignores': ['modules']
        }],
        'no-console': 'off',
    }
};