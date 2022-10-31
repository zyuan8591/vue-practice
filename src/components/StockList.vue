<template>
  <div class="font-mono flex flex-col">
    <h1 class="text-3xl font-bold">My Stcoks</h1>
    <div class="flex gap-2 mb-2">
      <input
        placeholder="Enter stock id"
        class="border focus:outline-0 px-2"
        type="text"
        v-model.trim="addInput"
        @keydown.enter="addStock"
      />
      <button class="text-white bg-accentClr px-3" @click="addStock">
        Add
      </button>
    </div>
    <!-- v-if remove or add to the DOM [ better ]-->
    <!-- v-show just hide and show element [ change very often ] -->
    <!-- <p class="text-accentClr" v-show="stockList.length === 0">No stock Now.</p> -->
    <p class="text-accentClr" v-if="stockList.length === 0">No stock Now.</p>
    <!-- v-else should behind v-if -->
    <!-- <p v-else-if="true"></p> -->
    <!-- cant have another element -->
    <ul v-else class="flex flex-col gap-2">
      <li
        v-for="(stock, i) in stockList"
        :key="stock"
        class="flex items-center gap-2"
      >
        <!-- @click.stop >> stopPropagation -->
        <span class="border px-2 cursor-pointer" @click="removeStock(i)"
          >X</span
        >
        <span>{{ i + 1 }}：{{ stock }}</span>
      </li>
    </ul>
    <h2 class="text-2xl text-cyan-500">test</h2>
    <ul>
      <li v-for="(val, key) in profile">{{ key }}：{{ val }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StockList',
  data() {
    return {
      stockList: [],
      addInput: '',
      profile: { name: 'aaron', age: 25 },
    };
  },
  methods: {
    addStock() {
      if (!this.addInput) return;
      this.stockList.push(this.addInput);
      this.addInput = '';
    },
    removeStock(idx) {
      this.stockList.splice(idx, 1);
    },
  },
  beforeCreate() {
    console.log('before create');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('before mount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('before update');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('before unmounted');
  },
  unmounted() {
    console.log('mounted');
  },
};
</script>
