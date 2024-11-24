import withNuxt from './.nuxt/eslint.config.mjs'
import { writeFile } from 'fs/promises'
import { defineFlatConfig } from 'eslint-define-config'

const config = await withNuxt();
await writeFile(
  './generated-eslint-config.json',
  JSON.stringify(config, null, 2)
);

const nuxtConfig = await withNuxt(); // Ждём выполнение промиса до экспорта

export default defineFlatConfig([
  ...nuxtConfig, // Распаковываем массив из Nuxt-конфигурации
  {
    globals: {
      definePageMeta: 'readonly', // Добавляем глобальную переменную
    },
    rules: {
      'no-undef': 'off', // Отключаем правило для неопределённых переменных
    },
  },
]);
