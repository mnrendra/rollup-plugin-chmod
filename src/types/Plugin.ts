import type { Plugin as RollupPlugin } from 'rollup'

import type { outputGenerationHooks } from '../core'

interface Plugin extends RollupPlugin {
  name: string
  version: string
  writeBundle: typeof outputGenerationHooks.writeBundle
}

export default Plugin
