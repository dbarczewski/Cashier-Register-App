import { shallowMount } from "@vue/test-utils";
import MenuIcon from "@/components/icons/MenuIcon.vue";

describe("icons/MenuIcon", () => {
  it("renders component correctly", () => {
    const wrapper = shallowMount(MenuIcon);
    expect(wrapper.element).toMatchSnapshot();
  });
});
