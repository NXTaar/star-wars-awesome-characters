import cloneDeep from 'lodash.clonedeep'

const intialState = {
    login: null,
    password: null
}

const actions = {
    LOGIN_TEXT_INPUT(state, action) {
        let newState = cloneDeep(state)
        let {input, val} = action.payload
        newState[input] = val.length > 0 ? val : null
        return newState
    }
}

const reducer = (state = intialState, action) => {
    let actionHandler = actions[action.type]
    return typeof actionHandler === 'function' ? actionHandler(state, action) : state
}

export default reducer