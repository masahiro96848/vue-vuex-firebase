<template>
	<footer class="footer" v-show="todos.length" v-cloak>
		<span class="todo-count">
			<strong>{{ remaining }}</strong> {{ remaining | pluralize}} left
		</span>
        <ul class="filters">
            <li v-for="(value, key) in filters" :key="key">
                <a 
                    :href="'#/' + key"
                    :class="{selected: visibility === key}"
                >
                    {{ key[0].toUpperCase() + key.substr(1)}}

                </a>

            </li>
        </ul>
        <button 
            class="clear-completed"
            v-show="todos.length > remaining"
            @click="removeCompleted"
        >
            完了タスクを削除する
        </button>
	</footer>
</template>

<script>
export default {
    name: 'TodoController',
    filters: {
        pluralize(n) {
            return n === 1 ? 'item' : 'items';
        }
    },
    computed: {
        todos() {
            return this.$store.state.todos
        },
        remaining() {
            return this.$store.getters.remaining
        },
        filters() {
            return this.$store.getters.filters;
        },
        visibility() {
            return this.$store.state.visibility;
        }
    },
    methods: {
        removeCompleted() {
            this.$store.commit('removeCompleted')
        }
    },
}
</script>