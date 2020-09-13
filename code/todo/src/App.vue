<template>
  <div id="app">
    <div class="app-input">
      <input
        type="text" v-model="keyword"
        placeholder="Find Or Create a TODO"
        @compositionstart="comstart"
        @compositionend="comend"
        @input="inputend"
      >
      <button @click="createTodo" value="">CREATE</button>
    </div>
    <div class="app-todolist">
      <todo-list :todoList="findTodo(keyword)"></todo-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
  },
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    createTodo() {
      if (this.keyword) {
        this.$store.commit('createTodo', this.keyword);
        this.keyword = '';
      }
    },
    comstart(e) {
      console.log('composition start: ', e.data, e);
    },
    comend(e) {
      console.log('composition end: ', e.data, e);
    },
    inputend(e) {
      console.log('inputinput  end: ', e.data, e);
    },
  },
  computed: {
    ...mapGetters([
      'findTodo',
    ]),
  },
};
</script>

<style lang="less">
body {
  font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.app-input {
  display: flex;
  justify-content: center;

  input[type='text'] {
    display: inline-block;
    vertical-align: middle;
    height: 2rem;
    line-height: 2rem;
    border-radius: 8px 0 0 8px;
    border: 1px solid #ccc;
    padding: 0 0.6rem;
    box-sizing: border-box;
  }

  button {
    display: inline-block;
    vertical-align: middle;
    height: 2rem;
    line-height: calc(2rem - 2px);
    border-radius: 0 8px 8px 0;
    border: 1px solid #ccc;
    border-left: 0;
    vertical-align: bottom;
  }
}

.app-todolist {
  margin: 2rem 0 0 0;
}

@media screen and (min-width: 768px) {
  #app {
    padding: 0 20%;
  }
}
@media screen and (min-width: 1200px) {
  #app {
    padding: 0 40%;
  }
}
</style>
