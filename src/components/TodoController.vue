<template>
	<footer class="footer" v-show="todos.length" v-cloak>
		<span class="todo-count">
			<strong>{{remaining}}</strong> items left
		</span>
	</footer>
</template>

<script>
export default {
    name: 'TodoController',
    computed: {
        todos() {
            return this.$store.state.todos
        },
        remaining() {
            return this.$store.getters.remaining
        }
    }
}
</script>