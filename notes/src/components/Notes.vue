<template>
  <div class="notes">
    <div class="note" :class="{full: !grid }" v-for="(note, index) in notes" :key="index">
      <div class="note__header">
        <p>{{ note.title }}</p>
        <p style="cursor: pointer;"
           @click="removeNote(index)"
        >x</p>
      </div>
      <div class="node__body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      notes: {
        type: Array,
        require: true
      },
      grid: {
        type: Boolean,
        require: true
      }
    },
    methods: {
      removeNote (index) {
        console.log(`Note id - ${index} removed`)
        this.$emit('remove', index)
      }
    }
  }
</script>

<style lang="scss">
  .notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;

  }
  .note {
    width: 48%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 3px 2px gray;
    padding: 18px 20px;
    margin-bottom: 20px;
    &.full {
      width: 100%;
      text-align: center;
    }
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-size: 32px;
      }
      p {
        font-size: 22px;
        color: #402caf;
      }
      svg {
        margin-right: 5px;
        color: #999999;
        cursor: pointer;
        &.active {
          color: #402caf;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    &__body {
      p {
        margin: 20px 0;
      }
      span {
        font-size: 14px;
        color: #999;
      }
    }
  }
</style>