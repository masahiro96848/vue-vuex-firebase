<template>
    <div class="p-lists">
        <div class="p-list">
            <p class="p-todolist">{{ title }} </p>
        </div>
            <button class="p-deletelist" @click="removeList">削除</button>
        
        
        
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        listIndex: {
            type: Number,
            required: true,
        },
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
<style>
.p-lists {
    display: flex;
    width: 530px;
    margin: 20px auto;
    border: 1px solid black;
}
.p-list {
    width: 90%;
}
.p-todolist {
    text-align: left;
    padding: 15px 15px 15px 60px;
    margin: 0;
}

</style>