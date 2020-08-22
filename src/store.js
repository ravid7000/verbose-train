import { highlightPosts } from "./utils/posts";

/**
 * posts: [
 *  {
 *    id: 0,
 *    heading: '',
 *    created: new Date(),
 *    shortDescription: '',
 *    description: '',
 *  }
 * ]
 * highlightedWords: [
 *  {
 *    id: 0,
 *    text: '',
 *    startAt: 0,
 *    endAt: 0,
 *  }
 * ]
 */

export default {
  state: {
    posts: [
      {
        id: 1,
        heading: "Test blog",
        description:
          "At vero sed diam. Consetetur sadipscing. sed diam. At vero Dolores et ea rebum. Lorem ipsum Consetetur sadipscing. Consetetur sadipscing. Consetetur sadipscing. Dolores et ea rebum. Dolores et ea rebum. Lorem ipsum sed at vero eos et accusam. sed at vero eos et accusam. At vero Lorem ipsum Dolores et ea rebum. Dolores et ea rebum. sed at vero eos et accusam. Dolores et ea rebum. Consetetur sadipscing. sed diam. At vero Consetetur sadipscing. sed diam. sed at vero eos et accusam. sed at vero eos et accusam. Lorem ipsum Consetetur sadipscing. Consetetur sadipscing. sed at vero eos et accusam. sed at vero eos et accusam. sed diam. sed diam. sed diam. Consetetur sadipscing. At vero sed diam. At vero Consetetur sadipscing. sed diam. At vero Consetetur sadipscing. At vero sed at vero eos et accusam. Consetetur sadipscing. Lorem ipsum Consetetur sadipscing. Dolores et ea rebum. Dolores et ea rebum. Consetetur sadipscing. Consetetur sadipscing. sed at vero eos et accusam. Consetetur sadipscing. Lorem ipsum sed at vero eos et accusam. At vero Dolores et ea rebum. sed at vero eos et accusam. Dolores et ea rebum. Lorem ipsum Lorem ipsum At vero sed at vero eos et accusam. Lorem ipsum At vero Lorem ipsum sed at vero eos et accusam. Consetetur sadipscing. Dolores et ea rebum. sed diam. Consetetur sadipscing. sed at vero eos et accusam. Consetetur sadipscing. Dolores et ea rebum. sed at vero eos et accusam. sed at vero eos et accusam. At vero At vero At vero Consetetur sadipscing. Lorem ipsum sed at vero eos et accusam. sed diam. sed diam. sed at vero eos et accusam. Consetetur sadipscing. Consetetur sadipscing. sed diam. Lorem ipsum Dolores et ea rebum. Consetetur sadipscing. sed at vero eos et accusam. Lorem ipsum Consetetur sadipscing. Consetetur sadipscing. sed diam. sed at vero eos et accusam. Dolores et ea rebum. Dolores et ea rebum. sed at vero eos et accusam. Consetetur sadipscing. sed diam. At vero sed diam. Lorem ipsum sed at vero eos et accusam. Dolores et ea rebum. Dolores et ea rebum. Consetetur sadipscing. Consetetur sadipscing. At vero Consetetur sadipscing. Consetetur sadipscing. At vero At vero sed at vero eos et accusam. sed at vero eos et accusam. Lorem ipsum Consetetur sadipscing. Consetetur sadipscing. Consetetur sadipscing. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum sed at vero eos et accusam. sed diam. sed at vero eos et accusam. sed at vero eos et accusam. Consetetur sadipscing. At vero Lorem ipsum Dolores et ea rebum. sed diam. Dolores et ea rebum. sed at vero eos et accusam. sed diam. sed diam. sed diam. Dolores et ea rebum. Lorem ipsum Consetetur sadipscing. sed diam. sed at vero eos et accusam. Lorem ipsum Consetetur sadipscing. Dolores et ea rebum. sed diam. Lorem ipsum Lorem ipsum Consetetur sadipscing. Consetetur sadipscing. Lorem ipsum At vero At vero sed diam. Consetetur sadipscing. Consetetur sadipscing. At vero Lorem ipsum At vero sed diam. Dolores et ea rebum. Consetetur sadipscing. Dolores et ea rebum. At vero sed at vero eos et accusam. sed diam. Consetetur sadipscing. At vero sed diam. Dolores et ea rebum. sed at vero eos et accusam. Consetetur sadipscing. Dolores et ea rebum. Dolores et ea rebum. sed at vero eos et accusam. Dolores et ea rebum. At vero At vero Lorem ipsum sed diam. At vero At vero Lorem ipsum Dolores et ea rebum. At vero Lorem ipsum Consetetur sadipscing. sed diam. Dolores et ea rebum. sed diam. sed diam. sed diam. At vero sed diam. sed diam. Dolores et ea rebum.",
        created: new Date(),
        shortDescription: "short description",
      },
    ],
    highlightedWords: [],
  },
  mutations: {
    addPost: (state, post) => {
      state.posts.unshift(post);
    },
    addWord: (state, word) => {
      const { highlightedWords } = state;
      const found = highlightedWords.filter(item => item.text === word.text);
      if (!found.length) {
        state.highlightedWords.unshift(word);
      }
    },
    deleteWord: (state, id) => {
      const { highlightedWords } = state;
      state.highlightedWords = highlightedWords.filter(
        (word) => word.id !== id
      );
    },
    deletePost: (state, id) => {
      const { posts } = state;
      state.posts = posts.filter((post) => post.id !== id);
    },
    editBlog: (state, { id, post }) => {
      const { posts } = state;
      state.posts = posts.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...post,
          };
        }
        return item;
      });
    },
  },
  getters: {
    getNewPostId: (state) => {
      return state.posts.length + 1;
    },
    getNewWordId: (state) => {
      return state.highlightedWords.length + 1;
    },
    getPostById: (state) => (id) => {
      const post = state.posts.filter((post) => post.id === id);
      if (post.length) {
        return post[0];
      }
      return {};
    },
    getWordById: (state) => (id) => {
      const post = state.highlightedWords.filter((post) => post.id === id);
      if (post.length) {
        return post[0];
      }
      return {};
    },
    getMatchingBlogs: (state) => (word) => {
      const { posts } = state;
      return highlightPosts(posts, word);
    },
  },
};
