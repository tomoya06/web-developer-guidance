import Vue from 'vue';
import TodoItem from './TodoItem';


export default {
  state: () => ({
    todoList: [],
  }),
  mutations: {
    createTodo(state, desc) {
      const newTodo = new TodoItem(desc);
      state.todoList.push(newTodo);
    },
    editTodo(state, payload) {
      const { id, desc = undefined, done = undefined } = payload;
      const target = state.todoList.findIndex((item) => item.id === id);
      if (target === -1) {
        return;
      }
      if (typeof desc !== 'undefined') {
        Vue.set(state.todoList[target], 'desc', desc);
      }
      if (typeof done !== 'undefined') {
        Vue.set(state.todoList[target], 'done', done);
      }
    },
    deleteTodo(state, id) {
      const target = state.todoList.findIndex((item) => item.id === id);
      if (target === -1) {
        return;
      }
      state.todoList.splice(target, 1);
    },
    triggerUpdate(state, id) {
      const target = state.todoList.findIndex((item) => item.id === id);
      if (target === -1) {
        return;
      }
      Vue.set(state.todoList[target], 'editing', !state.todoList[target].editing);
    },
    bruceAsyncAddTodo(state) {
      setTimeout(() => {
        state.todoList.push(new TodoItem('bruce async add!'));
      },100);
    }
  },
  getters: {
    findTodo(state) {
      return (desc) => state.todoList.filter((item) => item.desc.startsWith(desc));
    },
  },
  actions: {
    bruceAddTodo(ctx) {
      ctx.state.todoList.push(new TodoItem('create by action'));
    },
  },
  modules: {
  },
};
