<template>
  <div class="new-note">
    <label for="title">Title</label>
    <input v-model="note.title" type="text" id="title">
    <label for="descr">Description</label>
    <textarea v-model="note.descr" id="descr"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
  export default {
    props: {
      note: {
        type: Object,
        require: true
      }
    },
    methods: {
      addNote () {
        this.$emit('addNote', this.note)
      }
    }
  }
</script>

<style lang="scss">
  .new-note {
    text-align: center;
  }
  .btn {
    margin-top: 15px;
  }
</style>