
import { shallowMount } from "@vue/test-utils";
import Main from "@/components/Main.vue";

describe("Main", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Main);
    expect(wrapper.text()).toMatch("Main");
  });
});

