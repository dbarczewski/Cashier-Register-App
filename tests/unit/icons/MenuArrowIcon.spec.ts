import { shallowMount } from "@vue/test-utils";
import MenuArrowIcon from "@/components/icons/MenuArrowIcon.vue";

describe("icons/MenuArrowIcon", () => {
  it("renders component correctly", () => {
    const wrapper = shallowMount(MenuArrowIcon);
    expect(wrapper.element).toMatchSnapshot();
  });
});
