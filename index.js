/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "",
      showExtraInfo: true,
      fruits: ["apple", "banana", "cantaloupe"],
      newFruit: "",
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
    addNewFruit: function () {
      this.fruits.push(this.newFruit);
    },
  },
});
