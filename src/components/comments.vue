<template>
    <div >
            <h3>Comments</h3> 
        <div class="comments">
            <div @dblclick="onDblClick(comment)" v-for="comment in allComments" :key="comment.id" class="comment">
                <h3>{{ comment.name }}</h3>
                <small>{{ comment.email }}</small><br>
                {{  comment.body }}
                <i @click="deleteComment(comment.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
       
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Comments",
    methods: {
        ...mapActions(['fetchData','deleteComment','updateComment']),
        onDblClick(comment){
            const updComment = {
                id: comment.id,
                name: comment.name,
                email: comment.email,
                body: comment.body
            }
            this.updateComment(updComment);
        }
    },
    computed: mapGetters(['allComments']),
    created(){
        this.fetchData();
    }
}
</script>
<style scoped>
.comments{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}

 .comment{
     border: 1px solid #ccc;
     background: #41b883;
     padding: 1rem;
     border-radius: 5px;
     text-align: center;
     position: relative;
     cursor: pointer;
 }
 i{
     position:absolute;
     bottom: 10px;
     right: 10px;
     color: #fff;
     cursor: pointer;
 }
</style>