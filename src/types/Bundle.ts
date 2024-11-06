import type { OutputAsset, OutputChunk } from 'rollup'

type Bundle = Record<string, OutputAsset | OutputChunk>

export default Bundle
