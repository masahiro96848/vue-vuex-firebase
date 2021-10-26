<template>
    <div class="view">
        <div class="todoitem">
            <input 
                type="checkbox" 
                class="todo"
                :value="todo.completed"
                :checked="todo.completed"
                @input="onInput"
            >
            <label for="">{{ todo.title }}</label>
        </div>
        <button 
            class="destroy"
            @click="removeTodo"
        >
            削除する
        </button>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: Object,
    },
    methods: {
        onInput() {
            this.$store.commit('done', {
                todo: this.todo,
                completed: !this.todo.completed
            })
        },
        removeTodo() {
            this.$store.commit('removeTodo', this.todo)
        }
    },
}
</script>
<style>
.view {
    display: flex;
    justify-content: space-between;
}
</style>