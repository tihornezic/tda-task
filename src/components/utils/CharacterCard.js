import {useState, useEffect} from 'react'
import {useStateValue} from '../../context/StateProvider'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'

const CharacterCard = ({character}) => {
    const [{favorites, newlyAddedFavorite}, dispatch] = useStateValue()
    const [isOnFavorites, setIsOnFavorites] = useState(false)

    // check if character is in favorites
    useEffect(() => {
        let favoritesArray = favorites?.map((favorite) => {
            return favorite.id
        })

        if (favoritesArray.indexOf(character.id) !== -1) {
            setIsOnFavorites(true)
        } else {
            setIsOnFavorites(false)
        }

    }, [favorites]) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className={character.species === 'Human' ? 'characterCard human' : 'characterCard alien'}>

            {isOnFavorites ?
                <BookmarkIcon onClick={() => {
                    dispatch({
                        type: 'REMOVE_CHARACTER_FROM_FAVORITES',
                        payload: {
                            id: character.id,
                        }
                    });

                    // prevent subtracting if the newlyAddedFavorite is alredy 0
                    if(newlyAddedFavorite > 0) {
                        dispatch({
                            type: 'SUBTRACT_NEWLY_ADDED_FAVORITE',
                        })
                    } 
                }}
                />
                :
                <BookmarkBorderIcon onClick={() => {
                    dispatch({
                        type: 'ADD_CHARACTER_TO_FAVORITES',
                        payload: {
                            id: character.id,
                            image: character.image,
                            name: character.name,
                            species: character.species,
                            status: character.status,
                            gender: character.gender
                        }
                    });

                    dispatch({
                        type: 'ADD_NEWLY_ADDED_FAVORITE',
                    })
                }}
                />
            }

            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>

            <div className='infoContainer'>
                <div className='infoRow'>
                    <p className='label'>Species:&nbsp;</p>
                    <p className={character.species === 'Human' ? 'species human' : 'species alien'}>{character.species}</p>
                </div>

                <div className='infoRow'>
                    <p className='label'>Status:&nbsp;</p>
                    <p className='status'>{character.status}</p>
                </div>

                <div className='infoRow'>
                    <p className='label'>Gender:&nbsp;</p>
                    <p className='gender'>{character.gender}</p>
                </div>

            </div>
        </div>
    )
}

export default CharacterCard
