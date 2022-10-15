const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "GET_MOVIES":
            return ({...state, moviesLoaded: action.payload.Search})
        case "GET_MOVIE_DETAIL":
            return ({...state, movieDetail: action.payload})
        case "ADD_MOVIE_FAVORITE":
            return ({...state, moviesFavorites: [...state.moviesFavorites, action.payload]})
        case "REMOVE_MOVIE_FAVORITE":
            return ({...state, moviesFavorites: state.moviesFavorites.filter(e => e.id !== action.payload)})
        default:
            return state
    }
}

export default reducer