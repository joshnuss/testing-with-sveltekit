import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'
import path from 'path'

export default mergeConfig(viteConfig, defineConfig({
	test: {
		setupFiles: 'test/setup.js',
		globals: true,
	},
	resolve: {
		alias: {
			'$routes': path.resolve(__dirname, 'src/routes')
		}
	}
}))
