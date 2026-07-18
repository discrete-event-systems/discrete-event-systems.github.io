import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://discrete-event-systems.github.io',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
