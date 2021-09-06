import {useStateValue} from '../../context/StateProvider'
import CharactersGrid from '../utils/CharactersGrid'
import {useState, useEffect} from 'react'
import {
    fetchCharacters
} from '../../service/index'


const Home = () => {
    const [characters, setCharacters] = useState([])
    const [{favorites}] = useStateValue()

    // data fetch
    useEffect(() => {
        const fetchApi = async () => {
            setCharacters(await fetchCharacters())
        }

        fetchApi()
    }, [])


    // saving global state array to local storage
    useEffect(() => {
        localStorage.setItem('Favorites', JSON.stringify(favorites))
    })

    return (
        <div className='home'>
            <h1>Home</h1>

            <CharactersGrid characters={characters} />
        </div>
    )
}

export default Home
