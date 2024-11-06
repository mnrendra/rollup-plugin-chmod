# @mnrendra/rollup-plugin-chmod
🍣 A [Rollup](https://rollupjs.org/) plugin to change file permission modes.

## Requirements
✅ [LTS](https://github.com/nodejs/Release) Node version (v14.21.3+),  
✅ [Rollup](https://www.npmjs.com/package/rollup) (v4.24.0+) 

## Install
```bash
npm i -D @mnrendra/rollup-plugin-chmod
```

## Usage
For **ES modules** (`rollup.config.mjs`):
```javascript
import chmod from '@mnrendra/rollup-plugin-chmod'

export default {
  external: (id) => !/^[./]/.test(id),
  input: 'your_input_file.(js|cjs|mjs|ts|cts|mts)',
  output: {
    file: 'bin/your_output_file.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: chmod({
    mode: '755' // <-- Will change the 'bin/your_output_file.js' permission mode to '-rwxr-xr-x'
  })
}
```
For **CommonJS** (`rollup.config.js`):
```javascript
const chmod = require('@mnrendra/rollup-plugin-chmod')

module.exports = {
  external: (id) => !/^[./]/.test(id),
  input: 'your_input_file.(js|cjs|mjs|ts|cts|mts)',
  output: {
    file: 'bin/your_output_file.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: chmod({
    mode: '755' // <-- Will change the 'bin/your_output_file.js' permission mode to '-rwxr-xr-x'
  })
}
```

## Options
```javascript
const chmod = require('@mnrendra/rollup-plugin-chmod')

module.exports = [
  {
    plugins: [
      chmod({
        /**
         * The three rightmost digits define permissions for the file **owner**, **group**, and **others**.
         *
         * - 7: read, write, and execute
         * - 6: read and write
         * - 5: read and execute
         * - 4: read only
         * - 3: write and execute
         * - 2: write only
         * - 1: execute only
         * - 0: no permission
         *
         * example, `"755"`, means:
         * - The owner may read, write, and execute the file.
         * - The group may read and execute the file.
         * - Others may read and execute the file.
         *
         * */
        mode: '755'
      })
    ]
  }
]
```

### • `mode`
The three rightmost digits define permissions for the file **owner**, **group**, and **others**.<br/>
*type: `Mode`*<br/>
*default: `'644'`*

## Types
```typescript
import type {
  Mode,
  Plugin,
  Options
} from '@mnrendra/rollup-plugin-chmod'
```

## License
[MIT](https://github.com/mnrendra/rollup-plugin-chmod/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
