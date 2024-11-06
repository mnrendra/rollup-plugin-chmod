import type Mode from './Mode'

/**
 * The options interface.
 *
 * @see https://github.com/mnrendra/rollup-plugin-chmod#readme
 */
interface Options {
  /**
   * The three rightmost digits define permissions for the file **owner**,
   * **group**, and **others**.
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
   * @see https://nodejs.org/api/fs.html#file-modes
   */
  mode?: Mode
}

export default Options
