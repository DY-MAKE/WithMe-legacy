module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json'
    },
    ignorePatterns: ['.eslintrc.js', 'craco.config.js'],
    plugins: ['react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        'prettier/prettier': 'error',
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.tsx'],
            },
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
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
                pathGroups: [
                    {
                        pattern: 'angular',
                        group: 'external',
                        position: 'before'
                    }
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
            },
        ],
        'jsx-a11y/media-has-caption': 'off',
        'jsx-a11y/control-has-associated-label': 'off'
    },
};
