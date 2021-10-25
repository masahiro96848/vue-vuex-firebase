import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos: [],
		uid: 0,
	},
	getters: {

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
		}
	}
})