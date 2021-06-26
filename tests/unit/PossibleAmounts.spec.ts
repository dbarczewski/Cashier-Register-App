import { shallowMount } from "@vue/test-utils";
import PossibleAmounts from "@/components/PossibleAmounts.vue";

describe("NumericKeyPad", () => {
  it("renders correctly formatted value props", () => {
    const wrapper = shallowMount(PossibleAmounts, {
      props: {
        values: [1, 2.2, 3.12],
      },
    });
    const texts = wrapper.findAll("button").map((elem) => elem.text());
    expect(texts[0]).toContain("1,00\xa0€");
    expect(texts[1]).toContain("2,20\xa0€");
    expect(texts[2]).toContain("3,12\xa0€");
  });
  it("emits correct value on click", () => {
    const wrapper = shallowMount(PossibleAmounts, {
      props: {
        values: [1],
      },
    });
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted().inputNumber[0]).toEqual([1]);
  });
});
