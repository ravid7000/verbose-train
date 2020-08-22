export const highlightPosts = (posts, word) => {
  
  const { text } = word;
  if (!text) {
    return [];
  }
  const re = new RegExp(text, "im");
  const filtered = [];
  const limit = 90;
  let i = 0;
  const len = posts.length;

  while (i < len) {
    const { description } = posts[i];
    if (re.test(description)) {
      const startAt = description.match(re).index;
      const endAt = startAt + text.length;
      const preText = description.substring(startAt - limit, startAt);
      const inText = description.substring(startAt, endAt);
      const postText = description.substring(endAt, endAt + limit);
      const highlight = `${preText}<span class="highlight">${inText}</span>${postText}`;
      filtered.push({
        ...posts[i],
        highlight,
      });
    }
    i += 1;
  }

  return filtered;
};
