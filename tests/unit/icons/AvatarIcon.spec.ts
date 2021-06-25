
import { shallowMount } from "@vue/test-utils";
import AvatarIcon from "@/components/icons/AvatarIcon.vue";

describe("icons/AvatarIcon", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(AvatarIcon);
    expect(wrapper.text()).toMatch("AvatarIcon");
  });
});

