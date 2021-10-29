const more = `  
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |
            |  |`;

let loadMore = function () {
  document.querySelector("pre").append(more);
};

window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMore();
  }
};
