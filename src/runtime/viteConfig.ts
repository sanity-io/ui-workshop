import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path'
import {UserConfig} from 'vite'

/** @internal */
export function createViteConfig(options: {
  cwd: string
  outDir: string
  runtimeDir: string
  vanillaExtract: boolean | Parameters<typeof vanillaExtractPlugin>[0]
}): UserConfig {
  const {cwd, outDir, runtimeDir, vanillaExtract = true} = options

  return {
    build: {
      outDir,
      rollupOptions: {
        input: {
          main: path.resolve(runtimeDir, 'index.html'),
          frame: path.resolve(runtimeDir, 'frame/index.html'),
        },
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        jsx: 'automatic',
      },
    },
    plugins: [
      vanillaExtract && vanillaExtractPlugin(vanillaExtract === true ? undefined : vanillaExtract),
      react({
        babel: {plugins: [['babel-plugin-react-compiler', {target: '19'}]]},
      }),
    ].filter(Boolean),
    root: cwd,
  }
}
