import Adapter from "enzyme-adapter-react-16";
import Card from "../Card";
import Enzyme, {shallow} from "enzyme";
import React from "react";
import SavedBook from "../SavedBook";

Enzyme.configure({adapter: new Adapter()});

function setup() {
  const props = {
    authors: ["Anonymous"],
    description: "No description.",
    handleDelete: jest.fn(),
    id: "8813f3f50232d286d54ab132",
    image: "/images/Untitled.png",
    link: "https://books.google.com/books?id=ZrsVZKWJg4UC",
    title: "Untitled",
  };

  const enzymeWrapper = shallow(<SavedBook {...props} />);

  return {
    enzymeWrapper,
    props,
  };
}

describe("SavedBook", () => {
  it("should render without crashing", () => {
    shallow(<SavedBook />);
  });

  it("should render book information", () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.find(".card-title a").text()).toBe("Untitled");
    expect(enzymeWrapper.find(".card-title a").prop("href")).toBe("https://books.google.com/books?id=ZrsVZKWJg4UC");
    expect(enzymeWrapper.find(".card-text").text()).toBe("by Anonymous");
    expect(enzymeWrapper.find(".media-body").text()).toBe("No description.");
    expect(enzymeWrapper.find(".media a").prop("href")).toBe("https://books.google.com/books?id=ZrsVZKWJg4UC");
    expect(enzymeWrapper.find(".media img").prop("src")).toBe("/images/Untitled.png");
    expect(enzymeWrapper.find(".media img").prop("alt")).toBe("Untitled");
  });
});