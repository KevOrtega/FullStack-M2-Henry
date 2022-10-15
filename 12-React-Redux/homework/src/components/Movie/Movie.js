import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { match: { params: { id }}} = this.props
    
        this.props.getMovieDetail(id)
    }

    render() {

        return (
            <div className="movie-detail">
                {this.props.movie.Title}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getMovieDetail: movie => dispatch(getMovieDetail(movie))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie);