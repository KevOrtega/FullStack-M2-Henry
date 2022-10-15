import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
// import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.movies.length && this.props.movies.map((movie, id) => (
            <div key={"movieFavorite-" + id}>
              <button onClick={() => this.props.removeMovieFavorite(movie.id)}>x</button>
              <h1>{movie.title}</h1>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);