<template>
  <div class="flex flex-grow flex-col justify-between">
    <div class="bg-gray-100 flex-grow flex justify-center items-center">
      <main class="mt-10 bg-white">
        <div class="relative w-64 h-32 flex justify-center items-center">
          <span class="absolute left-4 top-4">Zu Zahlen</span>
          <div>
            <span>{{ convertNumberToEUR(startValue) }}</span>
          </div>
        </div>
        <hr />
        <div class="relative w-64 h-32 flex justify-center items-center">
          <span class="absolute left-4 top-4">Gegeben</span>
          <div>
            <span>€ 70,00</span>
          </div>
        </div>
      </main>
    </div>
    <div class="bg-gray-700 flex justify-center py-2 relative space-x-4">
      <possible-amounts @input-number="handlePossibleAmountsNumber" />
      <numeric-key-pad @input-number="handleKeyPadNumber" />
      <button
        class="
          absolute
          right-2
          bottom-2
          px-2
          py-1
          bg-blue-400
          border-2 border-white
          text-white
        "
        @click="this.showModal = true"
      >
        Zahlen
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
          v-for="x in ['Bar', 'EC', 'Kreditkarte', 'Gutschein', 'Sonstiges']"
          :key="x"
          class="px-10 py-2"
          :class="
            x === 'Bar'
              ? 'bg-gray-700 text-gray-200'
              : 'bg-gray-300 text-gray-700'
          "
        >
          {{ x }}
        </button>
      </div>
    </div>
    <app-modal
      @close="this.showModal = false"
      v-if="showModal"
      class="
        absolute
        transform
        -translate-x-1/2 -translate-y-1/2
        top-1/2
        left-1/2
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NumericKeyPad from "./NumericKeyPad.vue";
import PossibleAmounts from "./PossibleAmounts.vue";
import AppModal from "./AppModal.vue";
import { convertNumberToEUR } from "@/utils/CurrencyConverter";

export default defineComponent({
  components: { NumericKeyPad, PossibleAmounts, AppModal },
  name: "Main",
  data() {
    return {
      showModal: true,
      startValue: "0.00",
    };
  },

  methods: {
    convertNumberToEUR,
    handleKeyPadNumber(value: number | string) {
      console.log("emitted", value);

      //TODO: PUT IN OWN FUNCTIONS
      if (value === "<") {
        //TODO: FIX
        this.startValue = this.startValue.toString().slice(-1, 0);
      } else {
        const tempValue =
          this.startValue.replaceAll(".", "").toString() + value.toString();
        this.startValue = [
          tempValue.slice(0, -2),
          ".",
          tempValue.slice(-2),
        ].join("");
      }
    },
    handlePossibleAmountsNumber(value: number) {
      console.log("emitted", value);
      this.startValue = "" + value;
    },
  },
});
</script>
