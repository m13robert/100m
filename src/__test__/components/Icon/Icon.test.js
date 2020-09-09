import React from "react";
import { shallow } from "enzyme";
import Icon from "../../../components/Icon/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("Icon", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Icon />)));

  it("renders a FontAwesomeIcon instance", () => {
    expect(wrapper.find(FontAwesomeIcon).length).toEqual(1);
  });
});
