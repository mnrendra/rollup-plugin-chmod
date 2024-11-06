import type { OutputOptions } from 'rollup'

import type { Plugin } from '@/types'

import { writeFileSync, unlinkSync, statSync } from 'node:fs'

import { type Package, readPackage } from '@mnrendra/read-package'

import index from '..'

describe('Test all features:', () => {
  let plugin = {} as unknown as Plugin
  let pkg = {} as unknown as Package

  beforeEach(async () => {
    plugin = await index()
    pkg = await readPackage()
  })

  it('Should have a `name`!', () => {
    expect(plugin.name).toBe('chmod')
  })

  it('Should have a `version`!', () => {
    expect(plugin.version).toBe(pkg.version)
  })

  it('Should throw an error when the `output` option has a `dir` value!', () => {
    const received = (): void => {
      plugin.writeBundle({ dir: '' } as unknown as OutputOptions)
    }

    expect(received).toThrow(Error('This plugin doesn\'t support `output.dir`.'))
  })

  it('Should throw an error when the `output` option does not have a `file` value!', () => {
    const received = (): void => {
      plugin.writeBundle({ file: undefined } as unknown as OutputOptions)
    }

    expect(received).toThrow(Error('This plugin requires an `output.file`.'))
  })

  describe('By mocking dummy file:', () => {
    beforeEach(() => {
      writeFileSync('./tes', '')
    })

    afterEach(() => {
      unlinkSync('./tes')
    })

    it('Should be able to `chmod` the dummy file!', () => {
      plugin.writeBundle({ file: './tes' } as unknown as OutputOptions)
      const { mode } = statSync('./tes')

      const received = (mode & 0o777).toString(8)
      const expected = '644'

      expect(received).toBe(expected)
    })
  })

  describe('By mocking dummy file and passing `mode` option:', () => {
    let plugin = {} as unknown as Plugin

    beforeEach(async () => {
      plugin = await index({ mode: '755' })
      writeFileSync('./tes', '')
    })

    afterEach(() => {
      unlinkSync('./tes')
    })

    it('Should be able to `chmod` the dummy file with the `mode` option!', () => {
      plugin.writeBundle({ file: './tes' } as unknown as OutputOptions)
      const { mode } = statSync('./tes')

      const received = (mode & 0o777).toString(8)
      const expected = '755'

      expect(received).toBe(expected)
    })
  })
})
