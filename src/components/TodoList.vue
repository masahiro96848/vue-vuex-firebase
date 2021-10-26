<template>
    <section class="main" v-show="todos.length" v-cloak>
        <ul class="p-todolist toggle-all">
            <li 
                v-for="todo in todos" 
                :key="todo.id"
                class="p-todo" 
                :class="['todo', {completed: todo.completed}]"
                
            >
                <TodoItem
                    :todo="todo"
                />
            </li>
        </ul>
    </section>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    name: 'TodoList',
    components: {
            TodoItem,
    },
    computed: {
        todos() {
            return this.$store.state.todos
        }
    },
    methods: {
        updateList(){
            
        },
        removeList(){
            this.$store.dispatch('removelist', {listIndex: this.listIndex})
        }
    },
}
</script>
<style scoped>
.main {
    width: 500px;
    margin: 0 auto;
}
.p-todolist {
    width: 500px;
    text-align: left;
    /* padding: 15px 15px 15px 60px; */
    padding-left: 0px;
    margin: 0 auto;
    list-style: none;
}
.p-todo {
    border: 1px solid black;
    margin: 20px 0;
    padding: 15px 15px ;
}
[v-cloak] {
	display: none;
}

</style>