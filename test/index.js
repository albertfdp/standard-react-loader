'use strict'

const expect = require('unexpected').clone()
const webpack = require('webpack')
const config = require('./fixtures/webpack.config')

describe('standard-react-loader', () => {
  let err, stats

  before((done) => {
    webpack(config, (webpackErr, webpackStats) => {
      err = webpackErr
      stats = webpackStats
      done()
    })
  })

  it('should not have errors', () => {
    expect(err, 'to be null')
  })

  it('should have warnings', () => {
    const warnings = stats.compilation.warnings
    expect(warnings, 'to have length', 2)
  })

  it('should warn about semicolon', () => {
    const warnings = stats.compilation.warnings

    expect(warnings[0], 'not to be undefined')
    expect(/semicolon/gm.test(warnings[0].warning), 'to be true')
  })

  it('should warn about missing props', () => {
    const warnings = stats.compilation.warnings

    expect(warnings[1], 'not to be undefined')
    expect(/props\svalidation/gm.test(warnings[1].warning), 'to be true')
  })
})
