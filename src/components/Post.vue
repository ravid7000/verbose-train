<template>
  <div class="post">
    <h2 v-if="heading"><router-link :to="`${link}/${id}`">{{ heading }}</router-link></h2>
    <div v-if="date" class="date">Created at {{ date }}</div>
    <p v-if="shortDescription">{{ shortDescription }}</p>
    <p v-if="highlight" v-html="highlight" />
  </div>
</template>

<script>
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default {
  name: 'Post',
  props: {
    id: Number,
    heading: String,
    created: Date,
    shortDescription: String,
    link: {
      default: '/blogs',
      type: String,
    },
    highlight: {
      default: '',
      type: String,
    }
  },
  computed: {
    date() {
      if (this.created && this.created instanceof Date) {
        const date = new Date(this.created);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return `${day} ${monthNames[month]}, ${year}`;
      }
      return '';
    }
  }
}
</script>

<style scoped>
.post {
  padding: 20px 0;
  border-radius: 4px;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 0;
}

.date {
  font-size: 0.8rem;
  color: #999999;
}
</style>