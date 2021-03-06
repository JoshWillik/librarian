const express = require('express')
const router = require('./router')
const InMemoryStorage = require('librarian-memory-storage')
const InMemoryData = require('librarian-memory-data')
const NoCache = require('./plugins/NoCache')

function buildLibrarian (options = {}) {
  options.data = options.data || new InMemoryData()
  options.storage = options.storage || new InMemoryStorage()
  options.cache = options.cache || new NoCache()
  return router(options)
}

module.exports = buildLibrarian
