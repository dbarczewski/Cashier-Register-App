import { shallowMount, mount } from "@vue/test-utils";
import AppMain from "@/components/AppMain.vue";

describe("AppMain", () => {
  it("renders component correctly", () => {
    const wrapper = shallowMount(AppMain);
    expect(wrapper.element).toMatchSnapshot();
  });
  it("checks if eventListener is being removed after unmount", async () => {
    const addEventListenerSpy = jest.spyOn(global, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(global, "removeEventListener");
    const wrapper = mount(AppMain);

    expect(addEventListenerSpy).toBeCalled();
    expect(removeEventListenerSpy).not.toBeCalled();
    wrapper.unmount();
    expect(wrapper.emitted().inputNumber).toBeFalsy();
  });
  it("should switch states or triggersPayment when enter is being pressed", () => {
    const wrapper = mount(AppMain);
    const triggerPaymentSpy = jest.spyOn(wrapper.vm, "triggerPayment");
    let selectedState = wrapper.vm.selectedState;
    expect(selectedState).toBe(0);
    wrapper.vm.handleKeyDownEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
      })
    );
    expect(triggerPaymentSpy).not.toBeCalled();
    selectedState = wrapper.vm.selectedState;
    expect(selectedState).toBe(1);
    expect(triggerPaymentSpy).not.toBeCalled();
    wrapper.vm.handleKeyDownEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
      })
    );
    expect(triggerPaymentSpy).toBeCalled();
  });
  it("should handle the keypad numbers correctly for the pay state", () => {
    const wrapper = mount(AppMain);
    wrapper.vm.handleKeyPadNumber(1);
    expect(wrapper.vm.payAmount).toBe("00.01");
    wrapper.vm.handleKeyPadNumber(2);
    expect(wrapper.vm.payAmount).toBe("000.12");
    wrapper.vm.handleKeyPadNumber("delete");
    expect(wrapper.vm.payAmount).toBe("00.01");
    wrapper.vm.handleKeyPadNumber(2);
    wrapper.vm.handleKeyPadNumber(3);
    expect(wrapper.vm.payAmount).toBe("0001.23");
  });
  it("should handle the keypad numbers correctly for the given state", () => {
    const wrapper = mount(AppMain);
    wrapper.vm.toggleState(1);
    wrapper.vm.handleKeyPadNumber(1);
    expect(wrapper.vm.givenAmount).toBe("00.01");
    wrapper.vm.handleKeyPadNumber(2);
    expect(wrapper.vm.givenAmount).toBe("000.12");
    wrapper.vm.handleKeyPadNumber(3);
    expect(wrapper.vm.givenAmount).toBe("0001.23");
  });
  it("should set error if the payment is not sufficient", () => {
    const wrapper = mount(AppMain);
    wrapper.setData({
      givenAmount: "1.00",
      payAmount: "2.00",
    });
    expect(wrapper.vm.paymentError).toBeFalsy();
    wrapper.vm.triggerPayment();
    expect(wrapper.vm.paymentError).toBeTruthy();
  });
  it("should reset the amounts", () => {
    const wrapper = mount(AppMain);
    wrapper.setData({
      givenAmount: "1.00",
      payAmount: "2.00",
    });
    wrapper.vm.resetAmounts();
    expect(wrapper.vm.givenAmount).toBe("0.00");
    expect(wrapper.vm.payAmount).toBe("0.00");
  });
  it("should handle possibleAmountTrigger correctly", () => {
    const wrapper = mount(AppMain);
    wrapper.vm.handlePossibleAmountsNumber(100);
    expect(wrapper.vm.givenAmount).toBe("100");
  });
  it("should close the modal", () => {
    const wrapper = mount(AppMain);
    wrapper.setData({
      showModal: true,
      selectedState: 1,
    });
    expect(wrapper.vm.showModal).toBeTruthy();
    expect(wrapper.vm.selectedState).toBe(1);
    wrapper.vm.closeModal();
    expect(wrapper.vm.showModal).toBeFalsy();
    expect(wrapper.vm.selectedState).toBe(0);
  });
});

/**
 * handleKeyPadNumber(value: number | string) {
      this.paymentError = false;
      let stateToChange =
        this.selectedState === STATE.PAY ? this.payAmount : this.givenAmount;
      if (value === "<") {
        stateToChange = removeLastDigit(stateToChange);
      } else {
        stateToChange = addToNumber(stateToChange, value as string);
      }
      if (this.selectedState === STATE.PAY) {
        this.payAmount = stateToChange;
      } else {
        this.givenAmount = stateToChange;
      }
    },
 */
