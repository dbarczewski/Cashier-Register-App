
import { shallowMount } from "@vue/test-utils";
import AppModal from "@/components/AppModal.vue";

describe("AppModal", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(AppModal);
    expect(wrapper.text()).toMatch("AppModal");
  });
});

