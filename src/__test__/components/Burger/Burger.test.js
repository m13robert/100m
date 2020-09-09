import React from "react";
import { shallow } from "enzyme";
import Burger from "../../../components/Burger/Burger";
import Icon from "../../../components/Icon/Icon";

describe("Burger", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Burger />)));

  it("contains a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders the Icon", () => {
    expect(wrapper.containsAllMatchingElements([<Icon />])).toEqual(true);
  });
});
