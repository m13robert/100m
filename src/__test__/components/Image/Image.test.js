import React from "react";
import { shallow } from "enzyme";
import Image from "../../../components/Image/Image";

describe("Image", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Image />)));

  it("renders a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render an image based on the url prop", () => {
    wrapper.setProps({ url: "https://example.it" });
    expect(wrapper.find("img").props().src).toEqual("https://example.it");
  });

  it("should render an image with alt prop", () => {
    wrapper.setProps({ alt: "test" });
    expect(wrapper.find("img").props().alt).toEqual("test");
  });
});
