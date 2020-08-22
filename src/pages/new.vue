<template>
  <div>
    <div class="breadcrumb">
      <div class="crumb">
        <Button size="sm" @click="goBack()">Home</Button> / new
      </div>
    </div>
    <div class="container-sm form">
      <div class="title">
        <input type="text" placeholder="Title" autofocus="on" v-model="title" />

        <div class="controls">
          Length ({{ title.length }})
        </div>
        <div class="error" v-if="titleError">Title cannot be blank.</div>
      </div>
      <div class="content">
        <textarea placeholder="Write your blog" v-model="description"></textarea>
        <div class="controls">
          <button @click="randomTextGenerate()">Autofill Random</button>
          Length ({{ description.length }})
        </div>
        <div class="error" v-if="descriptionError">Description cannot be blank.</div>
      </div>
      <div class="footer">
        <Button @click="savePost()">Save</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button';
export default {
  name: 'New',
  components: {
    Button,
  },
  data() {
    return {
      title: '',
      description: '',
      titleError: false,
      descriptionError: false,
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    randomTextGenerate() {
      const words = 200;
      const content = ['Lorem ipsum','At vero','sed diam.','Consetetur sadipscing.','Dolores et ea rebum.','sed at vero eos et accusam.'];
      let i = 0;
      let texts = ''
      while (i < words) {
        const idx = Math.floor(Math.random() * content.length);
        texts += ` ${content[idx]}`;
        i += 1;
      }
      this.description = texts.trim();
    },
    validateForm() {
      let hasError = false;
      if (!this.title) {
        this.titleError = true;
        hasError = true;
      } else {
        this.titleError = false;
      }
      if (!this.description) {
        this.descriptionError = true;
        hasError = true;
      } else {
        this.descriptionError = false;
      }
      return hasError;
    },
    savePost() {
      if (!this.validateForm()) {
        const post = {
          id: this.$store.state.posts.length + 1,
          heading: this.title,
          description: this.description,
          created: new Date(),
          shortDescription: this.description.substr(0, 130),
        }
        this.$store.commit('addPost', post);
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>
.form {
  margin-top: 40px;
}

.title, .content {
  position: relative;
}

.controls {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  font-size: 0.8rem;
}

.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #dddddd;
}

.title input, .content textarea {
  display: block;
  width: 100%;
  padding: 5px;
  font-size: 1.6rem;
  border: 0;
}

.content {
  margin-top: 30px;
}

.content textarea {
  min-height: 400px;
  font-size: 1rem;
}

.title input:focus, .content textarea {
  outline: none;
}

.footer {
  margin-top: 20px;
}

.error {
  color: red;
  font-size: 0.8rem;
}
</style>