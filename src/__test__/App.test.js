import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Main from "../screens/Main";

describe("<App />", () => {
  it("should render the Main component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Main).length).toEqual(1);
  });
});
