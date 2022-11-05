module.exports = {
  ignorePatterns: [ "source/singleton.ts" ],
  env: {
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "jest",
  ],
  rules: {
    // Errors
    "@typescript-eslint/no-unused-vars": "error",
    "comma-dangle": ["error", "always-multiline"],
    "curly": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "indent": ["error", 2],
    "import/no-duplicates": "error",
    "import/no-named-as-default": "error",
    "import/no-unused-modules": ["error", {
      "missingExports": true,
      "unusedExports": true,
      "ignoreExports": [ "source/main.ts" ],
    }],
    "import/order": ["error", {
      "alphabetize": { "order": "asc" },
      "newlines-between": "always",
    }],
    "jest/prefer-called-with": "error",
    "jest/prefer-to-contain": "error",
    "jest/prefer-to-have-length": "error",
    "jest/prefer-todo": "error",
    "linebreak-style": ["error", "unix"],
    "no-await-in-loop": "error",
    "no-console": "error",
    "no-else-return": "error",
    "no-loss-of-precision": "error",
    "no-multiple-empty-lines": "error",
    "no-multi-spaces": "error",
    "no-promise-executor-return": "error",
    "no-template-curly-in-string": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable-loop": "error",
    "no-useless-backreference": "error",
    "quotes": ["error", "double"],
    "require-atomic-updates": "error",
    "semi": ["error", "always"],
    "yoda": "error",

    // Warnings
    // Please don't commit any new rules as warnings, because they likely won't ever get fixed.
    // If it's important enough to add as a rule, then it should be an error.

    // Ignored
    "@typescript-eslint/no-non-null-assertion": "off", // TODO we want to re-enable this
  },
  overrides: [
    {
      "files": [ "**/*.test.ts" ],
      "rules": {
        "import/no-unused-modules": "off", // Jest tests don't have exports
      },
    },
  ],
};
