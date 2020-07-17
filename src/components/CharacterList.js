import React from "react";
import { connect } from "react-redux";

import {
    setCurrentCharacter,
    getCharacterProfile,
} from "../reducer/character/actions";

import { Select, MenuItem } from "@material-ui/core";

const CharacterList = ({ characters, setCharacter }) => (
    <div id="character-list" className="col-md-6">
        <h1>Characters</h1>
        <Select
            style={{ color: "black", backgroundColor: "white", width: "80%" }}
            onChange={(x) => {
                setCharacter(x.target.value);
            }}
        >
            {characters.map((c, i) => (
                <MenuItem value={i + 1} key={i}>
                    {c.name}
                </MenuItem>
            ))}
        </Select>
    </div>
);

const mapStateToProps = ({ characters }) => ({
    characters,
});
const mapDispatchToProps = (dispatch) => ({
    setCharacter(id) {
        dispatch(setCurrentCharacter(id));
        dispatch(getCharacterProfile(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
