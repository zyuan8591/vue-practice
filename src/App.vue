<template>
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div class="max-w-main mx-auto px-3">
    <StockList />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import StockList from './components/StockList.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    StockList,
  },
};
</script>
