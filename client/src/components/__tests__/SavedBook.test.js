import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";
import React from "react";
import SavedBook from "../SavedBook";

Enzyme.configure({adapter: new Adapter()});

describe("SavedBook", () => {
  it("renders without crashing", () => {
    shallow(<SavedBook />);
  });

  it("renders book information", () => {
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

    expect(enzymeWrapper.find(".card-title a").text()).toBe(props.title);
    expect(enzymeWrapper.find(".card-title a").prop("href")).toBe(props.link);
    expect(enzymeWrapper.find(".card-text").text()).toBe("by " + props.authors.join(", "));
    expect(enzymeWrapper.find(".media-body").text()).toBe(props.description);
    expect(enzymeWrapper.find(".media a").prop("href")).toBe(props.link);
    expect(enzymeWrapper.find(".media img").prop("src")).toBe(props.image);
    expect(enzymeWrapper.find(".media img").prop("alt")).toBe(props.title);
  });

  it("renders no image when it has no cover", () => {
    const enzymeWrapper = shallow(<SavedBook />);
    expect(enzymeWrapper.exists(".media img")).toBe(false);
  });

  it("renders no authors", () => {
    const enzymeWrapper = shallow(<SavedBook />);
    expect(enzymeWrapper.find(".card-text").text()).toBe("by Nobody");
  });

  it("renders multiple authors", () => {
    const props = {
      authors: ["Anonymous", "Citizen"],
    };
    const enzymeWrapper = shallow(<SavedBook {...props} />);
    expect(enzymeWrapper.find(".card-text").text()).toBe("by Anonymous, Citizen");
  });

  it("calls `handleDelete` when the delete button is clicked", () => {
    const handleDelete = jest.fn();
    const enzymeWrapper = shallow(<SavedBook handleDelete={handleDelete} />);
    enzymeWrapper.find(".btn").simulate("click");
    expect(clickDelete).toHaveBeenCalled();
  });
});