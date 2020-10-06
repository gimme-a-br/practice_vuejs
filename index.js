/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Peter",
    };
  },
  methods: {
    changeMessage: function () {
      console.log("gonna change the message");
      this.message = "Whoa...";
    },
  },
});
