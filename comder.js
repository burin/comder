#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')
    , credits     = require('./credits')

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
      name        : 'comder'
    , appDir      : __dirname
    , languages   : ['en']
    , helpFile    : fpath('./i18n/help/{lang}.txt')
    , menuItems   : [ {
          name    : 'credits'
        , handler : credits
      } ]
  })