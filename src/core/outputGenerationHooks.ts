import type { OutputOptions } from 'rollup'

import type { Bundle } from '../types'

import { chmodSync } from 'node:fs'

import store from '../store'

/**
 * Rollup `writeBundle` hook.
 *
 * *Part of Rollup's Output Generation Hooks.*
 *
 * @param {OutputOptions} options Rollup `OutputOptions`.
 * @param {Bundle} bundle Rollup bundle.
 *
 * @see https://rollupjs.org/plugin-development/#writeBundle
 */
export const writeBundle = (
  {
    dir,
    file
  }: OutputOptions,
  bundle: Bundle
): void => {
  if (dir !== undefined) {
    throw new Error('This plugin doesn\'t support `output.dir`.')
  }

  if (file === undefined) {
    throw new Error('This plugin requires an `output.file`.')
  }

  chmodSync(file, store.mode as string)
}
