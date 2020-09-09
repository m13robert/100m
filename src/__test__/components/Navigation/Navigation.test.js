import React from "react";
import { shallow } from "enzyme";
import Navigation from "../../../components/Navigation/Navigation";
import Burger from "../../../components/Burger/Burger";

describe("Navigation", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Navigation />)));

  it("contains a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders the Burger, Logo and Settings components", () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Burger />,
        <Logo /> /*, <Settings /> */,
      ])
    ).toEqual(true);
  });
});
