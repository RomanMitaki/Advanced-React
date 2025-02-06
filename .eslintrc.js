module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        indent: ['error', 4],
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.tsx', '.jsx'] },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/prefer-default-export': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'warn',
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 1,
        'i18next/no-literal-string': ['warn', { markupOnly: true }],
        '@typescript-eslint/ban-types': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    },
    globals: {
        __IS_DEV__: true,
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        react: {
            version: 'detect',
        },
    },
};
