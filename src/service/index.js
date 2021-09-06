import axios from 'axios'

const charactersNumber = 100
const baseUrl = 'https://rickandmortyapi.com/api'

export const fetchCharacters = async () => {
    try {
        let charactersArray = []

        for (let i = 1; i <= charactersNumber; i++) {
            const {data} = await axios.get(`${baseUrl}/character/${i}`)
            charactersArray.push(data)
        }

        return charactersArray

    } catch (e) { }
}