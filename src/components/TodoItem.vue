<template>
    <div class="view">
        <div class="todoitem">
            <input type="checkbox" class="todo">
            <label for="">{{ todo.title }}</label>
        </div>
        <button class="destroy">削除する</button>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: Object,
    }
}
</script>
<style>
.view {
    display: flex;
    justify-content: space-between;
}
</style>