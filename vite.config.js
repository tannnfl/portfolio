import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        poplife: resolve(__dirname, 'project/poplife.html'),
        'poplife-gdd': resolve(__dirname, 'project/poplife-gdd.html'),
        timeplex: resolve(__dirname, 'project/timeplex.html'),
        'timeplex-gdd': resolve(__dirname, 'project/timeplex-gdd.html'),
        'beans-and-guns': resolve(__dirname, 'project/beans-and-guns.html'),
        'beans-gdd': resolve(__dirname, 'project/beans-gdd.html'),
        'survival-skills': resolve(__dirname, 'project/survival-skills.html'),
      },
    },
  },
})
