import { shallowMount } from "@vue/test-utils";
import AvatarIcon from "@/components/icons/AvatarIcon.vue";

describe("icons/AvatarIcon", () => {
  it("renders component correctly", () => {
    const wrapper = shallowMount(AvatarIcon);
    expect(wrapper.element).toMatchSnapshot();
  });
});
