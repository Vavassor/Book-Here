import Adapter from "enzyme-adapter-react-16";
import App from ".";
import React from "react";
import Enzyme, {shallow} from "enzyme";

Enzyme.configure({adapter: new Adapter()});

it("should render itself in isolation", () => {
  shallow(<App />);
});