import CONFIG from '../../config.json'
import { Platform} from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

import {composeWithDevTools} from 'remote-redux-devtools'
import thunk from 'redux-thunk'

const composeEnhancers = composeWithDevTools({
    realtime: true,
    name: Platform.OS,
    hostname: CONFIG.reduxDevTools.hostname,
    port: CONFIG.reduxDevTools.port
});

const middleware = [thunk]

const enhancers = composeEnhancers(applyMiddleware(...middleware))

const Store = createStore(reducer, enhancers)

Store.dispatch({type: `APP_LOADED - ${new Date()}`})

export default Store