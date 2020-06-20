// module.exports = {
//   extends: [
//     "airbnb",
//     "plugin:prettier/recommended",
//     "prettier/react"
//   ],
//   env: {
//     "browser": true,
//     "commonjs": true,
//     "es6": true,
//     "jest": true,
//     "node": true
//   },
//   rules: {
//     'jsx-a11y/href-no-hash': ["off"],
//     'react/jsx-filename-extension': ["warn", { "extensions": [".js", ".jsx"] }],
//     'max-len': [
//       "warn",
//       {
//         "code": 80,
//         "tabWidth": 2,
//         "comments": 80,
//         "ignoreComments": false,
//         "ignoreTrailingComments": true,
//         "ignoreUrls": true,
//         "ignoreStrings": true,
//         "ignoreTemplateLiterals": true,
//         "ignoreRegExpLiterals": true
//       }
//     ]
//   }
// }

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react',
  ],
  rules: {
    "jsx-a11y/anchor-is-valid": ["off"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": ["error", {"singleQuote": true, "trailingComma": "es5", "endOfLine":"auto"}],
    "no-unused-vars": "warn",
    "no-console": "warn",
  },
};