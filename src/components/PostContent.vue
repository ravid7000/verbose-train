<template>
  <div class="content">
    <div ref="content">
      <slot />
    </div>
    <div class="toolbar" ref="toolbar">
      <button @click="onHighlight()">Highlight Word</button>
    </div>
  </div>
</template>

<script>
import { createWordHighlighter } from '../utils/wordHighlighter';

export default {
  name: 'PostContent',
  methods: {
    onHighlight() {
      const selection = window.getSelection();
      const text = selection.toString();
      if (text) {
        const word = {
          id: this.$store.getters.getNewWordId,
          text,
          startAt: selection.anchorOffset - 1,
          endAt: selection.extentOffset - 1,
        };
        this.$store.commit('addWord', word);
        this.removeSelection();
        this.hideToolbar();
      }
    }
  },
  mounted() {
    const { content, toolbar } = this.$refs;
    const { removeSelection, hideToolbar } = createWordHighlighter(content, toolbar);
    this.removeSelection = removeSelection;
    this.hideToolbar = hideToolbar;
  }
}
</script>

<style scoped>
.toolbar {
  display: none;
  position: absolute;
  transition: all 0.3s;
}
.toolbar button {
  position: relative;
  display: inline-block;
  color: #ffffff;
  padding: 10px 15px;
  background-color: #000000;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  outline: none;
  text-align: center;
}

.toolbar button::after {
  content: '';
  position: absolute;
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #000000;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}
</style>