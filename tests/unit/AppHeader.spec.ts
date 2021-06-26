import { shallowMount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";

describe("icons/LockedIcon", () => {
  it("renders component correctly", () => {
    const wrapper = shallowMount(AppHeader);
    expect(wrapper.element).toMatchSnapshot();
  });
});
