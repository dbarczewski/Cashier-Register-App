import { mount } from "@vue/test-utils";
import AppModal from "@/components/AppModal.vue";

describe("AppModal", () => {
  it("should renders slot when passed", () => {
    const testContent = "TEST CONTENT";
    const wrapper = mount(AppModal, {
      slots: {
        default: `<span>${testContent}</span>`,
      },
    });
    expect(wrapper.text()).toMatch(testContent);
  });
  it("should emits close event when being clicked", () => {
    const wrapper = mount(AppModal);
    wrapper.trigger("click");
    expect(wrapper.emitted().close).toBeTruthy();
  });
  it("should not emits close event when slot is being clicked", () => {
    const wrapper = mount(AppModal, {
      slots: {
        default: `<span>Test</span>`,
      },
    });
    wrapper.find("span").trigger("click");
    expect(wrapper.emitted().close).toBeFalsy();
  });
});
