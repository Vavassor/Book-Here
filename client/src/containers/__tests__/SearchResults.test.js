import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount, shallow} from "enzyme";
import React from "react";
import {SearchResults} from "../SearchResults";

Enzyme.configure({adapter: new Adapter()});

describe("SearchResults", () => {
  it("renders without crashing", () => {
    shallow(<SearchResults />);
  });

  it("renders a message to signify no results", () => {
    const results = {items: []};
    const enzymeWrapper = mount(<SearchResults results={results} />);
    expect(enzymeWrapper.find(".card-body span").text()).toBe("No results.");
  });
});