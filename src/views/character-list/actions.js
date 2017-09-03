export const loadCharactersList = async (dispatch, getState) => {
    let allowedCharacters = Object.keys(CONFIG.characters)
    let characterRequest = allowedCharacters.map(char => {
        let reqId = CONFIG.characters[char].requestId
        return fetch(`https://swapi.co/api/people/${reqId}`)
    })
    let characters = (await Promise.all(characterRequest)).map(c => c._bodyInit)
    console.log(characters);
}