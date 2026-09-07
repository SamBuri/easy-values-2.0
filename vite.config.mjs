// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'


// Utilities
import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'

const virtualRootPlugin = () => {
    return {
        name: 'virtual-root-plugin',
        resolveId(id) {
            if (id.includes('/src/root/RootStore')) {
                return '\0virtual:RootStore';
            }
            if (id.includes('/src/root/RootController')) {
                return '\0virtual:RootController';
            }
            if (id.includes('/src/root/RootOptions')) {
                return '\0virtual:RootOptions';
            }
            if (id.includes('/src/root/RootState')) {
                return '\0virtual:RootState';
            }
            return null;
        },
        load(id) {
            if (id === '\0virtual:RootStore') {
                return `export { defineRootStore } from 'saburi-vue-utils';`;
            }
            if (id === '\0virtual:RootController') {
                return `import { useRootController } from 'saburi-vue-utils'; export default useRootController;`;
            }
            if (id === '\0virtual:RootOptions') {
                return `import { rootOptions } from 'saburi-vue-utils'; export default rootOptions;`;
            }
            if (id === '\0virtual:RootState') {
                return `export default {};`;
            }
            return null;
        }
    };
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        virtualRootPlugin(),
        Vue({
            template: {transformAssetUrls}
        }),
        // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
        Vuetify(
            {
                autoImport: true, // Auto-import Vuetify components

            }
        ),
        Components(),
        ViteFonts({
            google: {
                families: [{
                    name: 'Roboto',
                    styles: 'wght@100;300;400;500;700;900',
                }],
            },
        }),
    ],

    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vuetify: ['vuetify', 'vuetify/components', 'vuetify/directives'],
                }
            }
        }
    },

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
    server: {
        host: '0.0.0.0',
        allowedHosts: true,
        port: 8080,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        server: {
            deps: {
                inline: ['vuetify'],
            },
        },
    }
})
