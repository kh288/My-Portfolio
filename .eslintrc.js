module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
    "react-app",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "prettier",
    "@typescript-eslint",
  ],
  rules: {
    "prettier/prettier": ["error"],
    "no-use-before-define": "off",
    "comma-dangle": ["error", "never"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
    "react/function-component-definition": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"]
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
};
