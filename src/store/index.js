import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedTodoLists = localStorage.getItem('todo-lists')

const store =  new Vuex.Store({
  state: {
    list: savedTodoLists ? JSON.parse(savedTodoLists): []
  },
  mutations: {
    addtodo(state, payload) {
      state.list.push({title: payload.title, todos:[]})
    },
    removelist(state, payload) {
      state.list.splice(payload.listIndex, 1)
    }
  },
  actions: {
    addtodo(context, payload) {
      context.commit('addtodo', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    }
  },
  getters: {
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('todo-lists', JSON.stringify(state.list))
})

export default store