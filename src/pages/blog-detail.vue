<template>
  <div>
    <div class="breadcrumb">
      <div class="crumb">
        <Button size="sm" @click="goBack()">Home</Button> / <span class="inactive-link">{{ post.heading }}</span>
      </div>
      <div class="crumb-controls">
        <Button size="sm" @click="editBlog()">Edit</Button>
        {{ ' ' }}
        <Button size="sm" @click="deleteBlog()">Delete Blog</Button>
      </div>
    </div>
    <div class="container-sm">
      <h1>
        {{ post.heading }}
      </h1>
      <PostContent>
        {{ post.description }}
      </PostContent>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button';
import PostContent from '../components/PostContent';

export default {
  name: 'Home',
  components: {
    Button,
    PostContent,
  },
  computed: {
    post() {
      const { params: { id } } = this.$router.history.current;
      return this.$store.getters.getPostById(parseInt(id, 10));
    },
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    deleteBlog() {
      this.$store.commit('deletePost', this.post.id);
      this.goBack();
    },
    editBlog() {
      this.$router.push(`/edit/${this.post.id}`);
    }
  },
}
</script>

<style scoped>
</style>