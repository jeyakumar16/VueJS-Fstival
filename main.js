const app = Vue.createApp({
  data() {
    return {
      premium: false,
      cart: []
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  }
})
