<template>
  <div id="app">
    <div class="container">
        <addComments />  
        <filterComments />
       <Comments />  
      
        </div>
    
    </div>
</template>

<script>
import Comments from "./components/comments";
import addComments from "./components/addComment";
import filterComments from './components/filterComments';
export default {
  name: 'app',
  components: {
    Comments,
    addComments,
    filterComments
  }
}
</script>

<style>
body{
    background: #e7f8f3;
}
.container{
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 1 4rem;
}
</style>
