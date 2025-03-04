import type {
  Plugin as RollupPlugin,
  NormalizedOutputOptions,
  OutputBundle
} from 'rollup'

interface Plugin extends RollupPlugin {
  name: string
  version: string
  writeBundle: (
    options: NormalizedOutputOptions,
    bundle: OutputBundle
  ) => void
}

export default Plugin
