<template>
    <div>
        <h1>Add comments</h1>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="email">
                <input type="submit" value="Add">
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "addComments",
    data(){
        return {
            email: ''
        }
    },
    methods: {
        ...mapActions(['addComment']),
        onSubmit(e){
            e.preventDefault();
            this.addComment(this.email);
        }
    }
}
</script>
<style scoped>
form{
    display: flex;
}
input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid #31c834;
    outline: 1;
}
input[type="submit"]{
    flex: 2;
    background: #31c834;
    color: black;
    border: 1px #3311cc solid;
    cursor: pointer;
}
</style>