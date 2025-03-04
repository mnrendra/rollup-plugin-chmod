import { chmodSync } from 'node:fs'

import type { OutputOptions } from 'rollup'

import type { Bundle, Options, Plugin } from './types'

import { initStore, printInfo } from '@mnrendra/rollup-utils'

import store from './store'

/**
 * 🍣 A [Rollup](https://rollupjs.org/) plugin to change file permission modes.
 *
 * @param {Options} options - The options object.
 *
 * @returns {Promise<Plugin>} Rollup plugin object.
 *
 * @see https://www.npmjs.com/package/@mnrendra/rollup-plugin-chmod
 */
const main = async ({
  mode = '644'
}: Options = {}): Promise<Plugin> => {
  // Initialize store.
  await initStore(store)

  // Print info.
  printInfo(store)

  // Return Rollup plugin object.
  return {
    /**
     * Properties
     */
    name: store.pluginName,
    version: store.version,

    /**
     * Output Generation Hooks
     */
    writeBundle: ({ dir, file }: OutputOptions, bundle: Bundle): void => {
      if (dir !== undefined) {
        throw new Error('This plugin doesn\'t support `output.dir`.')
      }

      if (file === undefined) {
        throw new Error('This plugin requires an `output.file`.')
      }

      chmodSync(file, mode)
    }
  }
}

export default main
