import { describe, expect, test, it } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./button.vue";

describe("button.vue", () => {
  it("should render correctly", () => {
    const wrapper = mount(Button, {
      props: {
        type: "primary",
      },
      slots: {
        default: "测试按钮",
      },
    });
    console.log(wrapper.html());
    // expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.text()).toBe("测试按钮");
  });
  it("should render icon correctly", () => {
    const wrapper = mount(Button, {
      props: {
        type: "primary",
        icon: "sm-icon-search",
      },
      slots: {
        default: "测试按钮",
      },
    });
    console.log(wrapper.html());
    // expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.find(".sm-icon-search").exists()).toBe(true);
  });

  
});
