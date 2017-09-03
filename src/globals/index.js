import ReactLib from 'react';
import Native from 'react-native'
import * as Material from 'react-native-material-kit'

import CONFIG from '../../config.json'
import ASSETS from './assets.js'
import STYLES from './styles'

import COLORS from './colors'

import Store from '../redux'
import { connect } from 'react-redux'

import _ from './lodash'

let globalScope = {}

// Lodash
globalScope._ = _

globalScope.CONFIG = CONFIG
globalScope.STYLES = STYLES
globalScope.ASSETS = ASSETS

globalScope.COLORS = COLORS

//Redux
globalScope.Store = Store
globalScope.connect = connect
globalScope.dispatch = Store.dispatch.bind(Store)


// React && React Native lib globals
globalScope.React = ReactLib
globalScope.Component = ReactLib.Component
globalScope.Native = Native
globalScope.StyleSheet = Native.StyleSheet

// Material components
globalScope.Material = Material

Object.assign(global, globalScope)