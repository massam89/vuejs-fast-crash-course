<template>
  <div>
      <span>{{post.id}}</span>
      <h1>{{post.title}}</h1>
      <p>{{post.body}}</p>
  </div>
</template>

<script>
export default {
    name: 'PostsExample',
    props: ['post']
}
</script>

<style>

</style>