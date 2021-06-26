import { shallowMount, mount } from "@vue/test-utils";
import NumericKeyPad from "@/components/NumericKeyPad.vue";

describe("NumericKeyPad", () => {
  it("renders all 12 buttons", () => {
    const wrapper = shallowMount(NumericKeyPad);
    const allTexts = wrapper.findAll("button");
    expect(allTexts.length).toBe(12);
  });
  it("emits number when clicked on", () => {
    const wrapper = shallowMount(NumericKeyPad);
    const buttonFive = wrapper
      .findAll("button")
      .find((elem) => elem.text() === "5");
    buttonFive?.trigger("click");

    expect(wrapper.emitted().inputNumber).toEqual([[5]]);
  });
  it("emits number when typed", async () => {
    const wrapper = mount(NumericKeyPad);
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "5" }));

    expect(wrapper.emitted().inputNumber).toEqual([[5]]);
  });
  it("emits backspace when typed", async () => {
    const wrapper = mount(NumericKeyPad);
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Backspace" }));

    expect(wrapper.emitted().inputNumber).toEqual([["delete"]]);
  });
  it("emits nothing when wrong key is typed", async () => {
    const wrapper = mount(NumericKeyPad);
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "t" }));

    expect(wrapper.emitted().inputNumber).toBeFalsy();
  });
  it("checks if eventListener is being removed after unmount", async () => {
    const addEventListenerSpy = jest.spyOn(global, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(global, "removeEventListener");
    const wrapper = mount(NumericKeyPad);

    expect(addEventListenerSpy).toBeCalled();
    expect(removeEventListenerSpy).not.toBeCalled();
    wrapper.unmount();
    expect(wrapper.emitted().inputNumber).toBeFalsy();
  });
});
