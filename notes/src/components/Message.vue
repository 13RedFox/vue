<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        require: true
      }
    }

  }
</script>

<style lang="scss" scoped>
  .message {
    text-align: center;
  }
  p {
    color: cornflowerblue;
  }
</style>