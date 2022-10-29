<template>
  <h1>{{ msg }}</h1>
  <h3 :id="message">amount: {{ total() }}</h3>
  <h3 v-bind:id="count">plusamount:{{ plustotal }}</h3>
  <!-- @ = v-on: -->
  <p v-once>starting counter: {{ count }}</p>
  <button @click.right="count++">count is: {{ count }}</button>
  <br />
  <hr />
  <div>
    <h2>input</h2>
    <input type="text" v-model="message" @keyup.enter="confirmName" />
    <p>{{ message }}</p>
    <p>ConfirmName {{ confirmNameInput }}</p>
  </div>
  <div>
    <h2>v-html</h2>
    <p v-html="html"></p>
  </div>
  <div>
    <h2>radio button : {{ gender }}</h2>
    <input type="radio" id="male" value="male" v-model="gender" />
    <label for="male">male</label>
    <input type="radio" id="female" value="female" v-model="gender" />
    <label for="female">female</label>
  </div>
  <div>
    <h2>check box : {{ checkbox }}</h2>
    <input type="checkbox" name="" id="1" value="1" v-model="checkbox" />
    <label for="1">1</label>
    <input type="checkbox" name="" id="2" value="2" v-model="checkbox" />
    <label for="2">2</label>
    <input type="checkbox" name="" id="3" value="3" v-model="checkbox" />
    <label for="3">3</label>
  </div>
  <div>
    <h2>link</h2>
    <a :href="link">google</a>
  </div>
  <div>
    <h2>Form</h2>
    <!-- prevent default -->
    <form action="" @submit.prevent="">
      <input type="text" name="" id="" />
      <button>submit</button>
    </form>
  </div>
  <div>
    <h2>styling</h2>
    <div class="basic" :class="boxStyle"></div>
    <div :class="['basic', { active: chStyle }]"></div>
    <div
      :class="{ active: chStyle }"
      :style="{ width: '200px', height: '200px', border: '1px dashed #000' }"
    ></div>
    <button @click="changeStyle">change style</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      message: 'Hello World',
      price: 555,
      amount: 6,
      gender: 'male',
      checkbox: [],
      link: 'https://www.google.com/',
      html: '<h2>i m h2</h2>',
      confirmNameInput: '',
      plustotal: '',
      chStyle: false,
    };
  },
  watch: {
    // 當 count 改變時執行
    count(val) {
      this.plustotal = this.price * val;
    },
  },
  methods: {
    total() {
      return this.price * this.amount;
    },
    confirmName(e) {
      this.confirmNameInput = e.target.value;
      console.log(e);
    },
    changeStyle() {
      this.chStyle = !this.chStyle;
      console.log(this.chStyle);
    },
  },
  computed: {
    // 只執行一次 將結果存取起來 當依存的變數改變才會重新執行
    // plustotal() {
    //   return this.price + this.amount;
    // },
    boxStyle() {
      return this.chStyle ? 'active' : '';
    },
  },
};
</script>
