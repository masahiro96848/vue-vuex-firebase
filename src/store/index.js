import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedTodoLists = localStorage.getItem('todo-lists')

const store =  new Vuex.Store({
  state: {
    list: savedTodoLists ? JSON.parse(savedTodoLists): [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ]
  },
  mutations: {
    addtodo(state, payload) {
      state.list.push({title: payload.title, todos:[]})
    }
  },
  actions: {
    addtodo(context, payload) {
      context.commit('addtodo', payload)
    },
  },
  getters: {
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('todo-lists', JSON.stringify(state.list))
})

export default store