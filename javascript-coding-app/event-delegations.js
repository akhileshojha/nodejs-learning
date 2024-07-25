document.querySelector("#parent").addEventListener("click", (event) => {
  if (event.target && event.target.matches("button.className")) {
    console.log("button clicked", event.target.className);
  }
});
