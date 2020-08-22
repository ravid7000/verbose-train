<template>
  <div>
    <div class="breadcrumb">
      <div class="crumb">
        <Button size="sm" @click="goBack()">Home</Button> / <Button size="sm" @click="goWords()">Words</Button> / <span class="inactive-link">{{ post.text }}</span>
      </div>
      <div class="crumb-controls">
        <Button size="sm" @click="deleteWord()">Delete Word</Button>
      </div>
    </div>
    <div class="container-sm">
      <h1>
        Word: {{ post.text }}
      </h1>
      <div v-for="blog in blogs" v-bind:key="blog.id">
        <Post :id="blog.id" :heading="blog.heading" :highlight="blog.highlight" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button';
import Post from '../components/Post';

export default {
  name: 'Home',
  components: {
    Button,
    Post,
  },
  computed: {
    post() {
      const { params: { id } } = this.$router.history.current;
      return this.$store.getters.getWordById(parseInt(id, 10));
    },
    blogs() {
      return this.$store.getters.getMatchingBlogs(this.post);
    },
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    goWords() {
      this.$router.push('/words');
    },
    deleteWord() {
      this.$store.commit('deleteWord', this.post.id);
      this.goWords();
    }
  },
}
</script>

<style scoped>
</style>