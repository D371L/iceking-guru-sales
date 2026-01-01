import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Для GitHub Pages: используем имя репозитория как base path
    // Если репозиторий называется 'iceking-guru-sales', то base будет '/iceking-guru-sales/'
    // Для корневого домена (username.github.io) можно установить base: '/'
    // BASE_PATH можно задать через переменную окружения
    const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
    // Если репозиторий заканчивается на .github.io, используем корневой путь
    const isUserPage = repoName?.endsWith('.github.io');
    const base = process.env.BASE_PATH || (repoName && !isUserPage ? `/${repoName}/` : '/');
    
    return {
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
      }
    };
});
