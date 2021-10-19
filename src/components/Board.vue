<template>
    <div>
        <header>
            <p>Todo List</p>
        </header>
        <main>
            <p class="info-line">All: 0 tasks</p>
            <AddTodo />
        </main>
    </div>
    
</template>

<script>
import AddTodo from './AddTodo.vue'
export default {
    components: {
        AddTodo,
    }
}
</script>