module.exports = {
    root: true,
    parser: "babel-eslint",
    env: {
        "browser": true,
        "es6": true
    },
    extends: [
        "airbnb",
        // '@react-native-community',
        "plugin:flowtype/recommended",
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        "react",
        "flowtype"
    ],
    rules: {
        "react/jsx-filename-extension": "off",
        "import/prefer-default-export": "off",
        "camelcase": "off",
        "arrow-parens": "off",
        "indent": ["error", "tab", { "SwitchCase": 1 }],
        "react/jsx-indent": ["error", "tab"],
        "react/jsx-indent-props": ["error", "tab"],
        "implicit-arrow-linebreak": "off",
        "no-use-before-define": "off",
        "no-tabs": "off",
        "import/no-cycle": "off",
        "max-len": ["error", { "code": 120, "ignoreComments": true }],
        "object-curly-newline": "off",
        "react/jsx-wrap-multilines": "off",
        "operator-linebreak": "off",
        "function-paren-newline": "off",
        "react/no-array-index-key": 0,
        "linebreak-style": 0
    }
}
  