import StarWarsAPI from 'swapi-node'

export const loadCharactersList = async (dispatch, getState) => {
    let obiwan = await StarWarsAPI.getPerson(10)
    console.log(obiwan);
}