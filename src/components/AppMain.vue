<template>
  <div class="flex flex-grow flex-col justify-between">
    <div class="bg-gray-100 flex-grow flex justify-center items-center">
      <main class="mt-10 bg-white w-1/2 shadow">
        <button
          class="relative w-full h-32 flex justify-center items-center"
          @click="toggleState(0)"
        >
          <span class="absolute left-4 top-4">{{ content.payLabel }}</span>
          <div
            class="text-3xl"
            :class="
              selectedState === 0
                ? 'border-b-8 p-2 border-double border-highlight'
                : ''
            "
          >
            <span>{{ convertNumberToEUR(payAmount) }}</span>
          </div>
        </button>
        <hr />
        <button
          class="relative w-full h-32 flex justify-center items-center"
          @click="toggleState(1)"
        >
          <span class="absolute left-4 top-4">{{ content.givenLabel }}</span>
          <span
            v-if="paymentError"
            class="absolute right-4 top-4 text-red-500"
            >{{ content.error.givenAmountTooLow }}</span
          >
          <div
            class="text-3xl"
            :class="
              selectedState === 1
                ? 'border-b-8 p-2 border-double border-highlight'
                : ''
            "
          >
            <span>{{ convertNumberToEUR(givenAmount) }}</span>
          </div>
        </button>
      </main>
    </div>
    <div
      class="
        bg-background
        flex
        justify-center
        py-2
        relative
        space-x-4
        shadow-xl
      "
    >
      <possible-amounts
        @input-number="handlePossibleAmountsNumber"
        :values="calculatePossibleAmounts(payAmount)"
      />
      <numeric-key-pad @input-number="handleKeyPadNumber" />
      <button
        class="
          absolute
          right-4
          bottom-4
          px-6
          py-1
          bg-highlight
          border-2 border-white
          text-white text-3xl
          shadow-2xl
        "
        @click="triggerPayment"
      >
        {{ content.payButton }}
      </button>
      <div
        class="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          transform
          -translate-y-full
          flex
          space-x-px
        "
      >
        <button
          v-for="option in content.paymentOptions"
          :key="option"
          class="px-10 py-2"
          :class="
            option === 'Cash'
              ? 'bg-background text-gray-200'
              : 'bg-gray-300 text-background'
          "
        >
          {{ option }}
        </button>
      </div>
    </div>
    <app-modal
      @close="closeModal"
      v-if="showModal"
      class="
        absolute
        transform
        -translate-x-1/2 -translate-y-1/2
        top-1/2
        left-1/2
      "
    >
      <div class="relative w-full h-full flex justify-center items-center">
        <span class="absolute left-4 top-4">{{ content.change }}:</span>

        <span class="text-6xl">{{
          convertNumberToEUR(this.givenAmount - this.payAmount)
        }}</span>
        <button
          class="
            absolute
            right-2
            bottom-2
            px-10
            py-2
            shadow-xl
            bg-gray-700
            text-gray-200
          "
          @click="closeModal"
        >
          {{ content.confirm }}
        </button>
      </div>
    </app-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NumericKeyPad from "./NumericKeyPad.vue";
import PossibleAmounts from "./PossibleAmounts.vue";
import AppModal from "./AppModal.vue";
import Content from "./../../content.json";

import {
  convertNumberToEUR,
  calculatePossibleAmounts,
  addToNumber,
  removeLastDigit,
} from "@/utils";

enum STATE {
  PAY,
  GIVE,
}

export default defineComponent({
  components: { NumericKeyPad, PossibleAmounts, AppModal },
  name: "Main",
  data() {
    return {
      selectedState: STATE.PAY as STATE,
      paymentError: false,
      showModal: false,
      payAmount: "0.00",
      givenAmount: "0.00",
      content: Content,
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyDownEvent);
  },
  unmounted() {
    window.addEventListener("keydown", this.handleKeyDownEvent);
  },
  methods: {
    convertNumberToEUR,
    calculatePossibleAmounts,
    addToNumber,
    removeLastDigit,
    handleKeyDownEvent(e: KeyboardEvent) {
      if (e.key === "Enter") {
        if (this.selectedState === STATE.PAY) {
          this.selectedState = STATE.GIVE;
        } else if (this.selectedState === STATE.GIVE) {
          this.triggerPayment();
        }
      }
    },
    closeModal() {
      this.showModal = false;
      this.selectedState = STATE.PAY;
      this.resetAmounts();
    },
    resetAmounts() {
      this.payAmount = "0.00";
      this.givenAmount = "0.00";
    },
    toggleState(state: STATE) {
      this.selectedState = state;
    },
    handleKeyPadNumber(value: number | string) {
      this.paymentError = false;
      let stateToChange =
        this.selectedState === STATE.PAY ? this.payAmount : this.givenAmount;
      if (value === "delete") {
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
    handlePossibleAmountsNumber(value: number) {
      this.givenAmount = "" + value;
    },
    triggerPayment() {
      const parsedPayAmount = parseFloat(this.payAmount);
      const parsedGivenAmount = parseFloat(this.givenAmount);
      if (parsedPayAmount > parsedGivenAmount) {
        this.paymentError = true;
      } else {
        this.showModal = true;
      }
    },
  },
});
</script>
