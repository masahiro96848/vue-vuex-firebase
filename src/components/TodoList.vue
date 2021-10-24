<template>
    <div class="list">
        <p class="listheader">{{ title }} 
            <span class="updatelist" @click="updateList">編集</span>
            <span class="deletelist" @click="removeList">削除</span>
        </p>
        
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