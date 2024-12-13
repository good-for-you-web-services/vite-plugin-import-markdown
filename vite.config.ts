import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import copy from 'rollup-plugin-copy';
// import importMarkdownPlugin from './dist/index';

// https://vite.dev/config/
export default defineConfig({
	build: {
		copyPublicDir: false,
		minify: false,
		lib: {
			entry: [resolve(__dirname, 'lib/index.ts')],
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime', 'front-matter'],
		},
	},
	plugins: [
		copy({
			targets: [
				{
					src: 'lib/client.d.ts',
					dest: 'dist',
				},
			],
		}),
		react(),
		dts({
			tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
		}),
	],
});
