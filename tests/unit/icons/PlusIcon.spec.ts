import { shallowMount } from "@vue/test-utils";
import PlusIcon from "@/components/icons/PlusIcon.vue";

describe("icons/AvatarIcon", () => {
  it("renders component correctly", () => {
    const wrapper = shallowMount(PlusIcon);
    expect(wrapper.element).toMatchSnapshot();
  });
});
