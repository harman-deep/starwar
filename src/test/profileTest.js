import React from "react";
import { shallow } from "../../setupTests";

import CharacterProfile from "../components/CharacterProfile";

describe("CharacterProfile component", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<CharacterProfile />);
        expect(wrapper).toHaveLength(1);
    });
});
