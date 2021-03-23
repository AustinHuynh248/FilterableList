"use strict";
// Get input element
let filterInput = document.querySelector("#filterInput");

// keyup action it active when you type something doesn't matter what it is if you hit a keyboard if will count
filterInput.addEventListener("keyup", (e) => {
  //   Get value of input
  filterInput.value.toUpperCase();

  // Get name ul
  let ul = document.querySelector("#names");
  //   Get lis from ul
  let li = ul.querySelectorAll("li.collection-item");
  // loop through collection item li
  li.forEach((name) => {
    let a = name.firstElementChild;

    console.log(filterInput.value.toUpperCase());
    console.log(a.innerHTML.toUpperCase());
    // if matched
    if (a.innerHTML.toUpperCase().match(filterInput.value.toUpperCase())) {
      name.style.display = "";
    } else {
      name.style.display = "none";
    }
  });
});
