import { shallowMount } from "@vue/test-utils";
import CrossIcon from "@/components/icons/CrossIcon.vue";

describe("icons/CrossIcon", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(CrossIcon);
    expect(wrapper.element).toMatchSnapshot();
  });
});
