import React from "react";
import { shallow } from "enzyme";
import Main from "../../screens/Main";
import Navigation from "../../components/Navigation/Navigation";
import Card from "../../components/Card/Card";

describe("Main", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Main />)));
  it("should render a <div>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Navigation component", () => {
    expect(wrapper.containsAllMatchingElements([<Navigation />])).toEqual(true);
  });

  // it("should render the Card component", () => {
  //   expect(wrapper.containsMatchingElements([<Card />])).toEqual(true);
  // });
});
