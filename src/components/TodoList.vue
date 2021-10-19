<template>
    <div class="list">
        <p class="listheader">{{ title }} <span class="deletelist" @click="removeList">削除</span></p>
        
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
        removeList(){
            if(confirm('リストを削除しますか？')) {
                this.$store.dispatch('removeList', {listIndex: this.listIndex})
            }
        }
    },
}
</script>