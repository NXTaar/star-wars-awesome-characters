import { Platform} from 'react-native'
import { createStore } from 'redux'

import devToolsEnhancer from 'remote-redux-devtools'

const intialState = {
    login: null,
    password: null
}

const actions = {
    LOGIN_TEXT_INPUT(state, action) {
        console.log(action);
    }
}

const reducer = (state = intialState, action) => {
    let actionHandler = actions[action.type]
    return typeof actionHandler === 'function' ? actionHandler(state, action) : state
}





const Store = createStore(reducer, devToolsEnhancer({
    realtime: true,
    name: Platform.OS,
    hostname: 'localhost',
    port: 5678
}))
export default Store