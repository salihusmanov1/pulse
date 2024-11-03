import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  // Define the files to lint
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  // Define files to ignore
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // Base configuration for Vue and TypeScript
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  // Additional custom rules
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      "@typescript-eslint/no-explicit-any": "off"
    },
  },

  // Ensure Prettier doesn’t format files automatically (skip formatting)
  skipFormatting,
]