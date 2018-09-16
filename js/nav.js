const header = document.querySelector('header');
const nav = document.querySelector('nav');

// Displays Off-Canvas Navigation
function expandNav() {
  nav.style.width = `250px`;
}

// Hides Off-Canvas Navigation
function collapseNav() {
  nav.style.width = `0`;
}

// Determine if nav needs to open or close
function toggleNav(e) {
  if (e.target.className === "fas fa-bars") {
    expandNav();
  } else if (e.target.className === "fas fa-times") {
    collapseNav();
  }
}

header.addEventListener('click', toggleNav);