
import { shallowMount } from "@vue/test-utils";
import PossibleAmounts from "@/components/PossibleAmounts.vue";

describe("PossibleAmounts", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(PossibleAmounts);
    expect(wrapper.text()).toMatch("PossibleAmounts");
  });
});

