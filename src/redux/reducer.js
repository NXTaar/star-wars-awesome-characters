import cloneDeep from 'lodash.clonedeep'

const intialState = {
    loginView: {
        login: null,
        password: null,
        error: false
    },
    applicationData: {
        loginOk: false
    }
}

const actions = {
    LOGIN_TEXT_INPUT(state, action) {
        let newState = cloneDeep(state)
        let { input, val } = action.payload
        newState.loginView[input] = val.length > 0 ? val : null
        newState.loginView.error = false
        return newState
    },
    LOG_IN_ERROR(state, action) {
        let newState = cloneDeep(state)
        newState.loginView.error = true
        return newState
    },
    LOG_IN_OK(state, action) {
        let newState = cloneDeep(state)
        newState.applicationData.loginOk = true
        return newState
    }
}

const reducer = (state = intialState, action) => {
    let actionHandler = actions[action.type]
    return typeof actionHandler === 'function' ? actionHandler(state, action) : state
}

export default reducer