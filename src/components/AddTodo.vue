<template>
    <form class="addList" @submit.prevent="addTodo">
        <input 
            type="text"
            v-model="newTodo"
            class="text-input"
            placeholder="やることリストを追加"
            @keypress.enter="addTodo"
        >
    </form>
</template>

<script>
export default {
    name: 'AddTodo',
    data() {
        return {
            newTodo: ""
        }
    },
    methods: {
        addTodo() {
            this.$store.commit('addTodo', this.newTodo);
            this.newTodo = ""
        },
    },
}
</script>

<style >
.text-input {
    width: 470px;
    padding: 15px 15px ;
    
}

</style>