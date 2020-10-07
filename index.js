/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "",
      showExtraInfo: true,
    };
  },
  methods: {
    changeMessage: function () {
      console.log("gonna change the message");
      this.message = "Whoa...";
    },
    toggleExtraInfo: function () {
      this.showExtraInfo = !this.showExtraInfo;
    },
  },
});
