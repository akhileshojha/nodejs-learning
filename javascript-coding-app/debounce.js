function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
//usage
const debouncedFunction = debounce(() => {
  console.log("Hello, World!");
}, 1000);
debouncedFunction();
//window.addEventListener("resize", debouncedFunction);
