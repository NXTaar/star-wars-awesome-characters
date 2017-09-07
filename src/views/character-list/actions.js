export const loadCharactersList = async (dispatch) => {
    let allowedCharacters = Object.keys(CONFIG.characters)
    let characterRequest = allowedCharacters.map(char => {
        let reqId = CONFIG.characters[char].requestId
        return fetch(`https://swapi.co/api/people/${reqId}`)
    })
    let charactersInfo = (await Promise.all(characterRequest)).map(c => JSON.parse(c._bodyInit))
    let payload = _.zipWith(allowedCharacters, charactersInfo, (configInfo, serverInfo) => {
        let {name, gender, homeworld, birth_year, height} = serverInfo
        return {
            name,
            gender,
            birth_year,
            height,
            homeworld,
            ...configInfo
        }
    })
    dispatch({
        type: "CHARACTERS_FETCH_READY",
        payload
    })
}