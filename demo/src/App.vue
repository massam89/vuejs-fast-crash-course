<template>
  <div id="app">
    <router-link style=" position: fixed; top: 0" to="/contact">Contact</router-link>
    <router-link style=" position: fixed; top: 20px" to="/">Home</router-link>
    
    <PostsExample v-for="post in posts" :key="post.id" :post="post" />   
    <router-view />
  </div>
</template>

<script>
import PostsExample from './components/Posts.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    PostsExample
  },
  data(){
    return {
      posts: []
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => this.posts = data.data)
    .catch(e => console.log(e))
  }
}
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

</style>
