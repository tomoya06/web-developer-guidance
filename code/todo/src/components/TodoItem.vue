<template>
  <div class="todoitem-container">
    <div class="todoitem-chkbox">
      <input type="checkbox" v-model="todo.done" @change="updateDone" :id="`${todo.id}_done`">
      <label :for="`${todo.id}_done`"></label>
    </div>
    <div class="todoitem-desc" @click="startUpdate" v-if="!todo.editing">
      <span :class="todo.done ? 'todoitem-done' : ''">{{ todo.desc }}</span>
    </div>
    <div v-else>
      <input type="text" v-model="editingDesc">
      <button @click="finishUpdate">UPDATE</button>
    </div>
    <div class="todoitem-delete">
      <div class="delete-fakebtn" @click="deleteMyself"></div>
    </div>
  </div>
</template>
<script>
import TodoItemModel from '../store/TodoItem';

export default {
  props: {
    todo: TodoItemModel,
  },
  data() {
    return {
      editingDesc: '',
    };
  },
  methods: {
    deleteMyself() {
      this.$store.commit('deleteTodo', this.todo.id);
    },
    updateDone() {
      this.$store.commit('editTodo', {
        id: this.todo.id,
        done: this.todo.done,
      });
    },
    startUpdate() {
      this.$store.commit('triggerUpdate', this.todo.id);
      this.editingDesc = this.todo.desc;
    },
    finishUpdate() {
      this.$store.commit('editTodo', {
        id: this.todo.id,
        desc: this.editingDesc,
      });
      this.$store.commit('triggerUpdate', this.todo.id);
    },
  },
};
</script>
<style lang="less" scoped>
.todoitem {
  &-container {
    padding: 10px 10px;
    display: flex;
  }

  &-desc {
    cursor: pointer;
    flex-grow: 1;
  }

  &-done {
    text-decoration: line-through;
  }

  &-chkbox {
    position: relative;
    width: 1rem;
    height: 1rem;
    padding: 0 .6rem 0 0;

    input[type='checkbox'] {
      position: absolute;
      visibility: hidden;
    }

    label {
      position: absolute;
      width: 1rem;
      height: 1rem;
      border: 1px solid #ccc;
      border-radius: 50%;
      background-color: #fff;
    }

    label:after {
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      content: "";
      opacity: 0;
      position: absolute;
      transform: rotate(-45deg);
      left: .25rem;
      top: .26rem;
      height: .2rem;
      width: .4rem;
    }

    input[type='checkbox']:checked +label {
      background-color: #66bb6a;
      border-color: #66bb6a;
    }

    input[type="checkbox"]:checked + label:after {
      opacity: 1;
    }
  }
}
.delete-fakebtn {
  width: 1.2rem;
  height: 1.2rem;
  position: relative;
  cursor: pointer;
  &::after {
    content: '×';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    width: 1.2rem;
    height: 1.2rem;
    line-height: 1.25rem;
    font-size: 1rem;
    border-radius: 50%;
    padding: 0;
    border: 1px solid #ccc;
  }
}
</style>
