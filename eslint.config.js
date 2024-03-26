// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import globals from 'globals';

import stylistic from '@stylistic/eslint-plugin';

import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser/dist';

export default tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [...tseslint.configs.recommended],
    ignores: ['**/unlintedFolder'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        components: 'readonly',
        slide: 'readonly',
        utils: 'readonly',
        didUtils: 'readonly',
        autorun: 'readonly',
        controls: 'readonly',
        getFromSlide: 'readonly',
        window: 'readonly',
        document: 'readonly',
        ggbApplet: 'readonly',
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@stylistic': stylistic,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      /**
       * As of typing this, 2024, March 13, ESLint flat config does not support "extends" as it did with eslintrc files. Previously, our team used the "recommended" rules and extended from there. There are workarounds for force the recommended rules, but for now, this file separates the rules that the DID team has intentionally selected and moves the additional "recommended" rules down below
       */
      // ERROR RULES
      'no-const-assign': 'error',
      'no-global-assign': 'error',
      'no-undef': 'error',
      'array-callback-return': ['warn', { checkForEach: true }],
      // WARNING RULES
      camelcase: ['warn', { allow: ['material_id'] }],
      'dot-notation': 'warn',
      eqeqeq: 'warn',
      'id-length': [
        'warn',
        { exceptions: ['i', 'L', 'j', 'K'], properties: 'never' },
      ],
      'new-cap': 'warn',
      'no-array-constructor': 'warn',
      'no-case-declarations': 'warn',
      'no-duplicate-imports': 'warn',
      'no-else-return': 'warn',
      'no-eval': 'warn',
      'no-implied-eval': 'warn',
      'no-new-object': 'warn',
      'no-new-wrappers': 'warn',
      'no-prototype-builtins': 'warn',
      'no-underscore-dangle': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-unused-vars': [
        'warn',
        {
          varsIgnorePattern:
            'ggbOnInit|readKeyboardInstructions|updateKeyboardInstructions|ggbReadText|enableButton|libClientFunction|libClickFunction|libKeyFunction|registerSafeObjectUpdateListener|registerSafeObjectClickListener|registerHoverListener|unavailableButtonText|setTabOrder|manageAddedList|editXML|isPoly|selectedObject|readOrder',
          argsIgnorePattern: 'clientEvent|clickedName|keyEvent',
          ignoreRestSiblings: true,
        },
      ],
      'no-useless-escape': 'warn',
      'no-var': 'warn',
      'object-shorthand': 'warn',
      'one-var': ['warn', 'never'],
      'prefer-const': 'warn',
      'prefer-destructuring': [
        'warn',
        {
          array: false,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'spaced-comment': ['warn', 'always'],
    },
  },
  {
    files: ['**/*.js'],
    extends: [eslint.configs.recommended],
    ignores: ['**/unlintedFolder'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        dv: 'readonly',
        components: 'readonly',
        slide: 'readonly',
        utils: 'readonly',
        didUtils: 'readonly',
        autorun: 'readonly',
        controls: 'readonly',
        getFromSlide: 'readonly',
        window: 'readonly',
        document: 'readonly',
        ggbApplet: 'readonly',
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // ERROR RULES
      'no-const-assign': 'error',
      'no-global-assign': 'error',
      'no-undef': 'error',
      'array-callback-return': ['warn', { checkForEach: true }],
      // WARNING RULES
      camelcase: ['warn', { allow: ['material_id'] }],
      'dot-notation': 'warn',
      eqeqeq: 'warn',
      'id-length': [
        'warn',
        { exceptions: ['i', 'L', 'j', 'K'], properties: 'never' },
      ],
      'new-cap': 'warn',
      'no-array-constructor': 'warn',
      'no-case-declarations': 'warn',
      'no-duplicate-imports': 'warn',
      'no-else-return': 'warn',
      'no-eval': 'warn',
      'no-implied-eval': 'warn',
      'no-new-object': 'warn',
      'no-new-wrappers': 'warn',
      'no-prototype-builtins': 'warn',
      'no-underscore-dangle': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-unused-vars': [
        'warn',
        {
          varsIgnorePattern:
            'ggbOnInit|readKeyboardInstructions|updateKeyboardInstructions|ggbReadText|enableButton|libClientFunction|libClickFunction|libKeyFunction|registerSafeObjectUpdateListener|registerSafeObjectClickListener|registerHoverListener|unavailableButtonText|setTabOrder|manageAddedList|editXML|isPoly|selectedObject|readOrder',
          argsIgnorePattern: 'clientEvent|clickedName|keyEvent',
          ignoreRestSiblings: true,
        },
      ],
      'no-useless-escape': 'warn',
      'no-var': 'warn',
      'object-shorthand': 'warn',
      'one-var': ['warn', 'never'],
      'prefer-const': 'warn',
      'prefer-destructuring': [
        'warn',
        {
          array: false,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'spaced-comment': ['warn', 'always'],
    },
  }
);

// OLD TS RULES
// // ESLINT RECOMMENDED RULES FOR TYPESCRIPT - see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts
// // Rules that the DID team has intentionally selected are commented out below as they are included above
// "constructor-super": "off", // ts(2335) & ts(2377)
// "getter-return": "off", // ts(2378)
// // "no-const-assign": "off", // ts(2588)
// "no-dupe-args": "off", // ts(2300)
// "no-dupe-class-members": "off", // ts(2393) & ts(2300)
// "no-dupe-keys": "off", // ts(1117)
// "no-func-assign": "off", // ts(2630)
// "no-import-assign": "off", // ts(2632) & ts(2540)
// "no-new-symbol": "off", // ts(7009)
// "no-obj-calls": "off", // ts(2349)
// "no-redeclare": "off", // ts(2451)
// "no-setter-return": "off", // ts(2408)
// "no-this-before-super": "off", // ts(2376) & ts(17009)
// // "no-undef": "off", // ts(2304) & ts(2552)
// "no-unreachable": "off", // ts(7027)
// "no-unsafe-negation": "off", // ts(2365) & ts(2322) & ts(2358)
// // "no-var": "error", // ts transpiles let/const to var, so no need for vars any more
// // "prefer-const": "error", // ts provides better types with const
// "prefer-rest-params": "error", // ts provides better types with rest args over arguments
// "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply

// OLD JS RULES
// // ESLINT RECOMMENDED RULES FOR JAVASCRIPT - see https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
// // Rules that the DID team has intentionally selected are commented out below as they are included above
// "constructor-super": "error",
// "for-direction": "error",
// "getter-return": "error",
// "no-async-promise-executor": "error",
// // "no-case-declarations": "error",
// "no-class-assign": "error",
// "no-compare-neg-zero": "error",
// "no-cond-assign": "error",
// // "no-const-assign": "error",
// "no-constant-binary-expression": "error",
// "no-constant-condition": "error",
// "no-control-regex": "error",
// "no-debugger": "error",
// "no-delete-var": "error",
// "no-dupe-args": "error",
// "no-dupe-class-members": "error",
// "no-dupe-else-if": "error",
// "no-dupe-keys": "error",
// "no-duplicate-case": "error",
// "no-empty": "error",
// "no-empty-character-class": "error",
// "no-empty-pattern": "error",
// "no-empty-static-block": "error",
// "no-ex-assign": "error",
// "no-extra-boolean-cast": "error",
// "no-fallthrough": "error",
// "no-func-assign": "error",
// // "no-global-assign": "error",
// "no-import-assign": "error",
// "no-invalid-regexp": "error",
// "no-irregular-whitespace": "error",
// "no-loss-of-precision": "error",
// "no-misleading-character-class": "error",
// "no-new-native-nonconstructor": "error",
// "no-nonoctal-decimal-escape": "error",
// "no-obj-calls": "error",
// "no-octal": "error",
// // "no-prototype-builtins": "error",
// "no-redeclare": "error",
// "no-regex-spaces": "error",
// "no-self-assign": "error",
// "no-setter-return": "error",
// "no-shadow-restricted-names": "error",
// "no-sparse-arrays": "error",
// "no-this-before-super": "error",
// // "no-undef": "error",
// "no-unexpected-multiline": "error",
// "no-unreachable": "error",
// "no-unsafe-finally": "error",
// "no-unsafe-negation": "error",
// "no-unsafe-optional-chaining": "error",
// "no-unused-labels": "error",
// "no-unused-private-class-members": "error",
// // "no-unused-vars": "error",
// "no-useless-backreference": "error",
// "no-useless-catch": "error",
// // "no-useless-escape": "error",
// "no-with": "error",
// "require-yield": "error",
// "use-isnan": "error",
// "valid-typeof": "error",
