export const initialState = {
    // initializing state to array from local storage; if it is empty, initialize to empty array
    favorites: localStorage.getItem('Favorites') ? JSON.parse(localStorage.getItem('Favorites')) : [],
    newlyAddedFavorite: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CHARACTER_TO_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }

        case 'ADD_NEWLY_ADDED_FAVORITE':
            return {
                ...state,
                newlyAddedFavorite: state.newlyAddedFavorite + 1
            }

        case 'SUBTRACT_NEWLY_ADDED_FAVORITE':
            return {
                ...state,
                newlyAddedFavorite: state.newlyAddedFavorite - 1
            }

        case 'ANNUL_NEWLY_ADDED_FAVORITE':
            return {
                ...state,
                newlyAddedFavorite: 0
            }

        case 'REMOVE_CHARACTER_FROM_FAVORITES':
            let newFavorites = [...state.favorites]

            const index = state.favorites.findIndex((favorite) => favorite.id === action.payload.id)

            if (index >= 0) {
                newFavorites.splice(index, 1)
            } else {
                console.warn(
                    `Can't remove favorite item id: ${action.payload.id} as its not in the favorites.`
                )
            }

            return {...state, favorites: newFavorites}


        default:
            return state
    }
}

export default reducer