module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next/core-web-vitals', // Add this line for Next.js
    'next',
    'next/core-web-vitals',
    'next',
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'warn', // Change to warn instead of off
    'react-refresh/only-export-components': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    'prefer-const': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-refresh/only-export-components': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
