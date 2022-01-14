module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    'no-undef': 'off', // added to accept JSX type
    '@typescript-eslint/no-shadow': ['error'],
  },
};
