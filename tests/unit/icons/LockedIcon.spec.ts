import { shallowMount } from "@vue/test-utils";
import LockedIcon from "@/components/icons/LockedIcon.vue";

describe("icons/LockedIcon", () => {
  it("renders component correctly", () => {
    const wrapper = shallowMount(LockedIcon);
    expect(wrapper.element).toMatchSnapshot();
  });
});
