import { API_URL } from "../../constants";
export const SET_CURRENT_CHARACTER = "SET_CURRENT_CHARACTER";
export const SET_CHARACTER_MOVIES = "SET_CHARACTER_MOVIES";
export function setCurrentCharacter(id) {
    return {
        type: SET_CURRENT_CHARACTER,
        id,
    };
}

export function getCharacterProfile(id) {
    return (dispatch) =>
        fetch(`${API_URL}/people/${id}`)
            .then((res) => res.json())
            .then((profile) => {
                dispatch(setCharacterProfile(profile));
                dispatch(getCharacterMovies(profile.films));
            });
}

export const SET_CHARACTER_PROFILE = "SET_CHARACTER_PROFILE";

export function setCharacterProfile(profile) {
    return {
        type: SET_CHARACTER_PROFILE,
        profile,
    };
}

export function getCharacterMovies(moviesUrls) {
    return (dispatch) =>
        Promise.all(
            moviesUrls.map((movieUrl) =>
                fetch(movieUrl).then((res) => res.json())
            )
        ).then((movies) => dispatch(setCharacterMovies(movies)));
}

export function setCharacterMovies(movies) {
    return {
        type: SET_CHARACTER_MOVIES,
        movies,
    };
}
