import lodashGet from 'lodash.get'
// import CONFIG from '../config.json'
import ASSETS from './assets.js'
import STYLES from './styles'


import ReactLib from 'react';
import Native from 'react-native'

let globalScope = {}
globalScope._ = {}

globalScope._.get = lodashGet

// globalScope.CONFIG = CONFIG
globalScope.STYLES = STYLES
globalScope.ASSETS = ASSETS

globalScope.React = ReactLib
globalScope.Component = ReactLib.Component
globalScope.Native = Native
globalScope.StyleSheet = Native.StyleSheet

Object.assign(global, globalScope)