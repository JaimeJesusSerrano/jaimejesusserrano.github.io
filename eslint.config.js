import love from 'eslint-config-love'
import react from 'eslint-plugin-react'

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    ...love,
    files: ['**/*.{ts,tsx}'],
    plugins: {
      ...love.plugins,
      react,
    },
    rules: {
      ...love.rules,
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports', prefer: 'type-imports' }],
      '@typescript-eslint/no-import-type-side-effects': 'off',
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import/newline-after-import': ['error', { 'count': 1 }],
      'import/order': ['error', {
        'groups': [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'pathGroups': [
          { 'pattern': '@/assets/**', 'group': 'internal' },
          { 'pattern': '@/components/**', 'group': 'internal' },
          { 'pattern': '@/config/**', 'group': 'internal' },
          { 'pattern': '@/constants/**', 'group': 'internal' },
          { 'pattern': '@/hooks/**', 'group': 'internal' },
          { 'pattern': '@/modules/**', 'group': 'internal' },
          { 'pattern': '@/pages/**', 'group': 'internal' },
          { 'pattern': '@/services/**', 'group': 'internal' },
          { 'pattern': '@/store/**', 'group': 'internal' },
          { 'pattern': '@/types/**', 'group': 'internal' },
          { 'pattern': '@/utils/**', 'group': 'internal' }
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
        'newlines-between': 'always'
      }],
      'eol-last': ['error', 'always'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'object-curly-spacing': ['error', 'always'],
      'react/jsx-sort-props': ['error', { callbacksLast: true, shorthandFirst: true, ignoreCase: true, reservedFirst: true }],
      semi: ['error', 'never'],
    },
  },
]
