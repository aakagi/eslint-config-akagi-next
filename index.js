module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "settings": {
    "react": { "version": "detect" },
    "import/resolver": {
      "typescript": {} // Enable `eslint-plugin-import` for typescript via `eslint-import-resolver-typescript`
    }
  },
  "parser": "@typescript-eslint/parser", // Standard typescript parser
  "extends": [
    "next/core-web-vitals",
    "plugin:import/recommended", // Enforce recommended import linter rules
    "plugin:react/jsx-runtime", // Enforce standard react conventions
    "plugin:react-hooks/recommended", // Enforce "Rules of Hooks" https://reactjs.org/docs/hooks-rules.html
    "plugin:jsx-a11y/recommended", // Enforce good accessibility practices
    "plugin:regexp/recommended", // EXPERIMENT - Enable recommended regex rules
    "plugin:sonarjs/recommended", // EXPERIMENT - "SonarJS rules for ESLint to detect bugs and suspicious patterns in your code."
    // "plugin:@typescript-eslint/recommended", // Enable recommended typescript linter rules
    "plugin:prettier/recommended" // MUST GO LAST - Enables both eslint-plugin-prettier (Enables prettier) and eslint-config-prettier (Disables/cleans all other code formatting rules)
  ],
  "plugins": [
    "prettier" // Enable prettier configuration in rules
  ],
  "rules": {
    "prettier/prettier": ["error"], // Enable prettier
    "import/order": [
      "error",
      {
        "groups": [
          // Default: ["builtin", "external", "parent", "sibling", "index"],
          // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
          "unknown", // idk what this is
          "object" // subject to change -- not sure if we even want to allow this
        ],
        "alphabetize": { "order": "asc", "caseInsensitive": true }, // Alphabetize within a group.
        "newlines-between": "never", // Add newlines between groups.
        "warnOnUnassignedImports": true // Make unassigned imports show warnings
      }
    ]
  },
  "overrides": [
    {
      // Only run the ts linter for ts files
      "files": ["**/*.ts", "**/*.tsx"],
      "extends": [
        "plugin:@typescript-eslint/recommended", // Enable recommended typescript linter rules
        "plugin:prettier/recommended" // MUST GO LAST - Enables both eslint-plugin-prettier (Enables prettier) and eslint-config-prettier (Disables/cleans all other code formatting rules)
      ],
      "rules": {
        "no-unused-vars": "off", // Required for setting `@typescript-eslint/no-unused-vars` property below https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
        "@typescript-eslint/no-unused-vars": [
          "error",
          { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" } // Allow unused variables that begin with `_` for better DX
        ],
        "@typescript-eslint/consistent-type-imports": "error", // Force specifying `import type` when importing a typescript type
        "sonarjs/no-duplicate-string": "off" // Disable this rule because it conflicts frequently with tailwind classes
      }
    }
  ]
}
