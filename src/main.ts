import type { Options, Plugin } from './types'

import { initStore, printInfo } from '@mnrendra/rollup-utils'

import store from './store'
import { outputGenerationHooks } from './core'

/**
 * 🍣 A [Rollup](https://rollupjs.org/) plugin to change the file permission modes.
 *
 * @param {Options} options Options object.
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

  // Store options.
  store.mode = mode

  // Print info.
  await printInfo(store)

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
    writeBundle: outputGenerationHooks.writeBundle
  }
}

// Export the `main` as the default value.
export default main
