document.addEventListener("DOMContentLoaded", () => {
  
  let c;
  c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
});
