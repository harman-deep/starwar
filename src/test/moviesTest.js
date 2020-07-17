import React from "react";
import { shallow } from "../../setupTests";

import CharacterMovies from "../components/CharacterMovies";

describe("CharacterMovies component", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<CharacterMovies />);
        expect(wrapper).toHaveLength(1);
    });
});
