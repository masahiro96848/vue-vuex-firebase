<template>
    <form class="addList" @submit.prevent="addTodoList">
        <input 
            type="text"
            v-model="title"
            class="text-input"
            placeholder="やることリスト"
        >
        <button type="submit" class="btn-add">
            追加
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodoList() {
            this.$store.dispatch('addtodo', { title: this.title})
            this.title = ""
        },
    },
}
</script>