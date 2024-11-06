import type { OutputOptions } from 'rollup'

import { chmodSync } from 'node:fs'

import store from '../store'

export const writeBundle = ({
  dir,
  file
}: OutputOptions): void => {
  if (dir !== undefined) {
    throw new Error('This plugin doesn\'t support `output.dir`.')
  }

  if (file === undefined) {
    throw new Error('This plugin requires an `output.file`.')
  }

  chmodSync(file, store.mode as string)
}
