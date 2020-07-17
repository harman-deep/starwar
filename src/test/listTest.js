import React from "react";
import { shallow } from "../../setupTests";

import CharacterList from "../components/CharacterList";

describe("CharacterList component", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<CharacterList />);
        expect(wrapper).toHaveLength(1);
    });
});
