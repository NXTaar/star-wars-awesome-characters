export const userLoginInput = (payload) => ({
    type: 'LOGIN_TEXT_INPUT',
    payload
})

export const signIn = (dispatch, getState) => {
    let { login, password } = _.get(getState(), 'loginView')

    login = typeof login === 'string' ? login.trim() : login
    password = typeof password === 'string' ? password.trim() : password

    if (login === null && password === null) return

    let allowedCreds = _.get(CONFIG, 'creds')
    let passed = Object.keys(allowedCreds).some(storedLogin => {
        let storedPassword = allowedCreds[storedLogin]
        return storedPassword === password && storedLogin === login
    })

    passed ?
        dispatch({
            type: "LOG_IN_OK"
        }) :
        dispatch({
            type: "LOG_IN_ERROR"
        })
}