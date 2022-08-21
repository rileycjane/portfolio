// define what we will call these items of the page
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".sidebar-close");
const sidebar = document.querySelector(".sidebar");

// define what we'll do when these sections get clicked
toggleBtn.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
});

closeBtn.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
});
