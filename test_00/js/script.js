const app = new Vue({
  el: '#app',
  data: {
    title: 'Изучение Vue.js',
    showContent: false,
    user: {
      name: 'Alex',
      email: 'info@mail.net'
    },
    users: [
      {name: 'Jack', email: 'jack@mail.net', age: 22},
      {name: 'Alex', email: 'alex@mail.net', age: 23},
      {name: 'Scott', email: 'scott@mail.net', age: 24},
    ]
  },
  methods: {
    getContent () {
      this.showContent = !this.showContent
      console.log(this.user);
    }
  },
  computed: {

  }
});
