import type { Config } from 'stylelint';

export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['dist/**/*', 'node_modules/**/*', 'storybook-static/**/*'],
  rules: {
    'selector-class-pattern': null,
    'media-feature-range-notation': null,
    'color-function-alias-notation': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'color-hex-length': null,
    'value-keyword-case': null,
    'custom-property-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'rule-empty-line-before': null,
    'shorthand-property-no-redundant-values': null,
  },
} satisfies Config;
