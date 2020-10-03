<template>
  <div class="list-container">
    <todo-item
      class="list-item"
      v-for="todoItem in todoList" :key="todoItem.id"
      :todo="todoItem"
    ></todo-item>
    <div class="list-placeholder" v-if="!todoList.length">
      <span>No Matching Todo...</span>
    </div>
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue';

export default {
  props: {
    todoList: Array,
  },
  components: {
    TodoItem,
  },
};
</script>
<style lang="less">
.list-container {
  border: 1px solid #eeeeee;
  border-radius: 8px;
  min-height: 1rem;

  .list-item {
    &:not(:last-child) {
      border-bottom: 1px solid #eeeeee;
    }
  }

  .list-placeholder {
    font-size: 0.875rem;
    text-align: center;
    padding: 1rem 0;
    color: #aaaaaa;
  }
}
</style>
