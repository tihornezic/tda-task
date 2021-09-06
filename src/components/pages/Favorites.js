import {useStateValue} from '../../context/StateProvider'
import CharactersGrid from '../utils/CharactersGrid'

const Favorites = () => {
    const [{favorites}] = useStateValue()

    return (
        <div className='favorites'>
            <h1>Favorites</h1>

            {favorites.length > 0 ?
                <CharactersGrid characters={favorites} />
                :
                <p className='empty'>
                    You haven't added any characters to your favorites! Go to Homepage and click on the ribbon icon to do so!
                </p>
            }
        </div>
    )
}

export default Favorites
