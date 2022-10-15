import axios from "axios";

const apikey = '9da1401c'

export function getMovies(title) {
    return function(dispatch) {
        return axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}`)
            .then(res => res.data)
            .then(data => dispatch({type: "GET_MOVIES", payload: data}))
    }
}

export function getMovieDetail(id) {
    return function(dispatch) {
        return axios.get(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
            .then(res => res.data)
            .then(data => dispatch({type: "GET_MOVIE_DETAIL", payload: data}))
    }
}

export function addMovieFavorite(movie) {
    return {type: "ADD_MOVIE_FAVORITE", payload: {title: movie.Title, id: movie.imdbID}}
}

export function removeMovieFavorite(id) {
    return {type: "REMOVE_MOVIE_FAVORITE", payload: id}
}