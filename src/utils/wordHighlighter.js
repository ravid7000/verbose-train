const RE = /^[0-9a-zA-Z]+$/; // check only alphanumerics is allowed.

const getBoundingBox = (rect) => {
  let i = 0;
  let len = rect.length;
  
  const box = {
      left: window.innerWidth,
      right: 0,
      height: 0,
      y: rect.item(0).y,
  }
  
  while(i < len) {
      box.left = Math.min(box.left, rect.item(i).left);
      box.right = Math.max(box.right, rect.item(i).right);
      i += 1;
  }
  
  return box;
}

const validateSelection = (text) => {
  return RE.test(text);
}

export const createWordHighlighter = (content, toolbar) => {
  if (!content || !toolbar) {
    return null;
  }

  const showToolbar = ({ left, top }) => {
    toolbar.style.display = 'block';
    toolbar.style.left = `${left - (toolbar.clientWidth / 2)}px`;
    toolbar.style.top = `${top - toolbar.clientHeight - 10}px`;
  }

  const hideToolbar = () => {
    toolbar.style.display = 'none';
  }

  const isToolbarVisible = () => toolbar.style.display === 'block';

  content.addEventListener("mouseup", () => {
    // wait for selection to finish
    setTimeout(() => {
      const selection = window.getSelection();
      const text = selection.toString().trim()
      if (validateSelection(text)) {
        const rect = selection.getRangeAt(0).getClientRects();
        const bounds = getBoundingBox(rect);
        const x =
          bounds.left === 0
            ? bounds.right / 2
            : (bounds.right + bounds.left) / 2;
        showToolbar({ left: x, top: window.pageYOffset + bounds.y });
      } else {
        hideToolbar();
      }
    }, 0);
  });

  document.addEventListener('mousedown', (event) => {
    if (isToolbarVisible() && !content.contains(event.target) && !toolbar.contains(event.target)) {
      hideToolbar();
    }
  });

  return {
    removeSelection: () => {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        window.getSelection().removeAllRanges();
      }
    },
    hideToolbar,
  }
};
