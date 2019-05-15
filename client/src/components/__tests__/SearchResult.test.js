import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";
import React from "react";
import SearchResult from "../SearchResult";

Enzyme.configure({adapter: new Adapter()});

describe("SearchResult", () => {
  it("renders without crashing", () => {
    const volume = {
      volumeInfo: {
        authors: [],
      },
    };
    shallow(<SearchResult volume={volume} />);
  });

  it("renders result information", () => {
    const volume = {
      volumeInfo: {
        authors: ["Citizen"],
        description: "No description.",
        imageLinks: {
          thumbnail: "/images/Untitled.png",
        },
        previewLink: "https://books.google.com/books?id=ZrsVZKWJg4UC",
        title: "Untitled",
      },
    };
    
    const enzymeWrapper = shallow(<SearchResult volume={volume} />);

    const info = volume.volumeInfo;
    expect(enzymeWrapper.find(".card-title a").text()).toBe(info.title);
    expect(enzymeWrapper.find(".card-title a").prop("href")).toBe(info.previewLink);
    expect(enzymeWrapper.find(".card-text").text()).toBe("by " + info.authors.join(", "));
    expect(enzymeWrapper.find(".media a").prop("href")).toBe(info.previewLink);
    expect(enzymeWrapper.find(".media img").prop("src")).toBe(info.imageLinks.thumbnail);
    expect(enzymeWrapper.find(".media img").prop("alt")).toBe(info.title);
    expect(enzymeWrapper.find(".media-body").text()).toBe(info.description);
  });

  it("calls `handleSaveClick` when the save button is clicked", () => {
    const handleSaveClick = jest.fn();
    const props = {
      handleSaveClick,
      volume: {
        volumeInfo: {
          authors: [],
        },
      },
    };
    const enzymeWrapper = shallow(<SearchResult {...props} />);
    enzymeWrapper.find(".btn").simulate("click");
    expect(handleSaveClick).toHaveBeenCalled();
  });
});