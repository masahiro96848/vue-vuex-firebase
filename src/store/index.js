import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos: [],
		uid: 0,
	},
	getters: {
		remaining: (state) => {
			const todos = state.todos.filter((todo) => !todo.completed);
			return todos.length
		}
	},
	mutations: {
		addTodo(state, todoTitle) {
			const newTodo = todoTitle && todoTitle.trim();
			if(!newTodo){
				return;
			}
			state.todos.push({
				id: state.uid++,
				title: newTodo,
			})
		},
		done(state,{todo, completed}) {
			todo.completed = completed;
		},
		removeTodo(state, todo) {
			state.todos = state.todos.filter((item) => item != todo);
		}
	}
})