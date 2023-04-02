import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react-swc"

const srcAliases = [
	"components",
	"contexts",
	"pages",
	"private",
	"scripts",
]

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {host: "0.0.0.0"},
	build: {
		rollupOptions: {
			external: ["/Users/ehrrsn7/Documents/Code/Node/ejhfotos.com"]
		}
	},
	resolve: {
		alias: [
		  	{
				find: "@src",
				replacement: path.resolve(__dirname, "src")
			},
			...srcAliases.map(alias => {
				return {
					find: `@${alias}`,
					replacement: path.resolve(__dirname, `src/${alias}`)
				}
			})
		],
	},
   test: {
      globals: true,
      environment: "jsdom",
   },
})
