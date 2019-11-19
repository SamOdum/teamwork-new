module.exports = {
    env: {
      browser: 'true',
      node: 'true',
      es6: 'true',
      commonjs: 'true'
    },
    extends: [
      'airbnb-base'
    ],
    globals: { 
      'Atomics': 'readonly', 
      'SharedArrayBuffer': 'readonly'
    },
    parserOptions: {
      'ecmaVersion': 2018
    },
    rules: {
      'linebreak-style': ['error', 'windows'],
      "no-console": 1,
    },
  };
  