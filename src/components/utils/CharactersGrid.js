import CharacterCard from '../utils/CharacterCard'
import LoaderSpinner from '../utils/LoaderSpinner'

const CharactersGrid = ({characters}) => {

    return (
        <div className='charactersGrid'>
            {characters.length > 0 ?
                characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))
                :
                <LoaderSpinner />
            }
        </div>
    )
}

export default CharactersGrid
