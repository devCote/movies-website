module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:react/jsx-runtime',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        semi: [2, 'never'],
        'implicit-arrow-linebreak': [0, 'always'],
        'i18next/no-literal-string': [1, { markupOnly: true }],
        'operator-linebreak': [0, 'always'],
        'arrow-body-style': [0, 'always'],
        'no-unused-vars': [1, { args: 'all', argsIgnorePattern: '^_' }],
        'object-curly-newline': [0, 'always'],
        'comma-dangle': [0, 'always-multiline'],
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'max-len': [2, { comments: 120, code: 90 }],
        'react/jsx-uses-react': 'off',
        //
        'react/jsx-uses-vars': 'error',

        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
}
