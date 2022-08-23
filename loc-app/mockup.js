var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};
ready(() => {
  document.querySelector(".header").style.height = window.innerHeight + "px";
});

const navbar = document.querySelector(".navbar");
// const main = document.quer
let oldValue = 0;

window.addEventListener("scroll", function (e) {
  // Get the new Value
  newValue = window.pageYOffset;

  //Subtract the two and conclude
  if (oldValue - newValue < 0) {
    // console.log("Up");
    if (!sidebar.classList.contains("show-sidebar")) {
      sidebar.classList.add("show-sidebar");
    }
  } else if (oldValue - newValue > 0) {
    // console.log("Down");
    if (sidebar.classList.contains("show-sidebar")) {
      sidebar.classList.remove("show-sidebar");
    }
  }
  // Update the old value
  oldValue = newValue;
});
