import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
  ],
  theme: {
    screens: {
      xs : '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      height: {
        'card': '453px',
        'logo': '380px',
      },
      width: {
        'card': '390px',
        'logo': '380px',
      },
      boxShadow: {
        'card': ' 8px 9px rgba(204, 204, 204, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
    skeleton({
      themes: { preset: [ "vintage" ] }
    })
  ],
}

