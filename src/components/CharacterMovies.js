import React from "react";
import { connect } from "react-redux";
import { ListItem } from "@material-ui/core";

const CharacterMovies = ({ movies }) => (
    <div id="character-movies" className="col-md-6">
        <h1>Movies</h1>
        {movies.map((movie) => {
            const dateArray = movie.release_date.split("-");
            return (
                <ListItem key={movie.title}>
                    {movie.title} ({dateArray[0]})
                </ListItem>
            );
        })}
    </div>
);

const mapStateToProps = ({ character: { movies } }) => ({
    movies,
});

export default connect(mapStateToProps)(CharacterMovies);
