
import { shallowMount } from "@vue/test-utils";
import NumericKeyPad from "@/components/NumericKeyPad.vue";

describe("NumericKeyPad", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(NumericKeyPad);
    expect(wrapper.text()).toMatch("NumericKeyPad");
  });
});

