<template>
	<div id="app" class="todoapp">
		<header>
            <p class="p-title">Todo List</p>
			<AddTodo />
        </header>
		<TodoList />
		<TodoController />
	</div>
</template>

<script>
import store from './store/index'
import TodoList from './components/TodoList.vue'
import AddTodo from './components/AddTodo.vue'
import TodoController from './components/TodoController.vue'

export default {
	name: 'app',
	store,
	components: {
		TodoList, AddTodo, TodoController
	}
}
</script>
<style>
.p-title {
    font-size: 48px;
    font-weight: 700;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
