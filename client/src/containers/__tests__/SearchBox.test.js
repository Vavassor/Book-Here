import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount, shallow} from "enzyme";
import React from "react";
import {SearchBox} from "../SearchBox";

Enzyme.configure({adapter: new Adapter()});

describe("SearchBox", () => {
  it("renders without crashing", () => {
    shallow(<SearchBox />);
  });

  it("is validated on submission", () => {
    const enzymeWrapper = mount(<SearchBox />);
    const preventDefault = jest.fn();
    enzymeWrapper.find("#search").simulate("submit", {preventDefault});
    expect(enzymeWrapper.find("#search").hasClass("was-validated")).toBe(true);
    expect(preventDefault).toBeCalled();
  });
});