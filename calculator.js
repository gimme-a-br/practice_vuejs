/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      firstNumber: 0,
      secondNumber: 0,
      thirdNumber: 0,
      sum: 0,
    };
  },
  methods: {
    computeSum: function () {
      this.sum = parseInt(this.firstNumber) + parseInt(this.secondNumber) + parseInt(this.thirdNumber);
      console.log(this.sum);
    },
  },
});
