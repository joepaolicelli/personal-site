import presetWind4 from '@unocss/preset-wind4';
import { defineConfig, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [presetWind4(), presetAttributify(), presetIcons()],
  theme: {
    font: {
      armata: 'Armata',
      kufam: 'Kufam',
    },
  },
});
