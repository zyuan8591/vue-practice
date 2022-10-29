<template>
  <div class="font-mono flex flex-col">
    <h1 class="text-3xl font-bold">My Stcoks</h1>
    <p class="text-accentClr" v-if="stockList.length === 0">No stock Now.</p>
    <ul>
      <li>Stocks</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StockList',
  data() {
    return { stockList: [] };
  },
};
</script>
