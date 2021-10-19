<template>
    <div>
        <header>
            <p>Todo List</p>
        </header>
        <main>
        <AddTodo />
            <p class="info-line">All: 0 tasks</p>
            <div class="list-index">
                <TodoList
                    v-for="(item, index) in list"
                    :key="index"
                    :title="item.title"
                    :listIndex="index"
                />
            </div>
        </main>
    </div>
    
</template>

<script>
import AddTodo from './AddTodo.vue'
import TodoList from './TodoList.vue'
import {mapState} from 'vuex'

export default {
    components: {
        AddTodo,
        TodoList,
    },
    computed: {
        ...mapState([
            'list'
        ])
    }
}
</script>