
import CONFIG from '../../config.json'
import ASSETS from './assets.js'
import STYLES from './styles'
import Store from '../redux'

import ReactLib from 'react';
import Native from 'react-native'
import { connect } from 'react-redux'
import _ from './lodash'

let globalScope = {}

// Lodash
globalScope._ = _

globalScope.CONFIG = CONFIG
globalScope.STYLES = STYLES
globalScope.ASSETS = ASSETS


//Redux
globalScope.Store = Store
globalScope.connect = connect


// React && React Native lib globals
globalScope.React = ReactLib
globalScope.Component = ReactLib.Component
globalScope.Native = Native
globalScope.StyleSheet = Native.StyleSheet

Object.assign(global, globalScope)