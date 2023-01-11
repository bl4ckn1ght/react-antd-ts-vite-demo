import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import windicss from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		windicss(),
		createSvgIconsPlugin({
			iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[name]'
		})
	],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src/')
		}
	},
	server: {
		host: '127.0.0.1',
		port: 5555,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:4523/m1/1821665-0-default/api',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, '')
			}
		}
	}
})
