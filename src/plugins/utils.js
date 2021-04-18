exports.install = function (Vue) {
  Vue.prototype.$utils = {
    helloworld: () => {
      console.log("Hello world!")
    }
  }
};