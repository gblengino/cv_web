// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        mdi: ["*"], // Material Design Icons (UX/UI)
        "simple-icons": ["*"] // Simple Icons (Logos)
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});