<template>
  <div class="container-sm">
    <div class="links">
      <router-link to="/" class="lnk">Blogs</router-link>
      <router-link to="/words" class="lnk">Highlighted Words</router-link>
    </div>
    <div v-for="post in posts" v-bind:key="post.id">
      <Post :id="post.id" :heading="post.heading" :created="post.created" :shortDescription="post.shortDescription" />
    </div>
    <div v-if="posts.length === 0" class="empty">
      No blog yet. Click on `Write Blog` to create a new blog post.
    </div>
  </div>
</template>

<script>
// import Button from '../components/Button';
import Post from '../components/Post';

export default {
  name: 'Home',
  components: {
    Post,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
}
</script>

<style scoped>
.empty {
  margin-top: 30px;
  text-align: center;
}

.links {
  margin-top: 30px;
}
</style>