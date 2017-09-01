import lodashGet from 'lodash.get'
import CONFIG from '../config.json'
import ASSETS from './assets.js'

let globalScope = {}
globalScope._ = {}

globalScope._.get = lodashGet

globalScope.CONFIG = CONFIG
globalScope.ASSETS = ASSETS


Object.assign(global, globalScope)