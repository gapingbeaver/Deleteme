// eslint.config.js
import { defineConfig } from "eslint/config";
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import a11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import * as resolver from 'eslint-import-resolver-typescript'
import reactRefresh from 'eslint-plugin-react-refresh'
import noRel from 'eslint-plugin-no-relative-import-paths'
import query from '@tanstack/eslint-plugin-query'
import tseslint from 'typescript-eslint'

export default defineConfig([
  { ignores: ['dist'] },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettier,
      'jsx-a11y': a11y,
      'no-relative-import-paths': noRel,
      'import': importPlugin,
      '@tanstack/query': query,
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended,
      react.configs.recommended,
      reactHooks.configs.recommended,
      query.configs.recommended,],
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
          alwaysTryTypes: true,
        }
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      }
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
]);