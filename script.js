const themeToggle = document.querySelector(".theme-toggle");

const html = document.querySelector("html");
const toggleTheme = (theme) => {
  html.dataset.theme = theme;
};

themeToggle.addEventListener("change", switchTheme);

function switchTheme() {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    themeToggle.checked = true;
  }

  var recaptcha = document.querySelector("#g-recaptcha-response");

  if (recaptcha) {
    recaptcha.attr("data-theme", currentTheme);
  }
}

let menu = document.querySelector(".menu");
let toggle_sidebar = document.querySelector(".toggle-sidebar");
let main = document.querySelector(".main");

let sidebarIsOpen;

let deviceIsMobile = window.matchMedia("(max-width: 780px)");

if (deviceIsMobile.matches) {
  sidebarIsOpen = true;
} else {
  sidebarIsOpen = false;
}

toggle_sidebar.addEventListener("click", (e) => {
  if (sidebarIsOpen) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

main.addEventListener("click", () => {
  if (deviceIsMobile.matches && sidebarIsOpen) {
    closeSidebar();
  }
});

const closeSidebar = () => {
  toggle_sidebar.classList.remove("open");
  menu.classList.add("close");
  sidebarIsOpen = !sidebarIsOpen;
};

const openSidebar = () => {
  toggle_sidebar.classList.add("open");
  menu.classList.remove("close");
  sidebarIsOpen = !sidebarIsOpen;
};

const toggleSidebar = (deviceIsMobile) => {
  if (deviceIsMobile.matches) {
    closeSidebar();
  } else {
    openSidebar();
  }
};

toggleSidebar(deviceIsMobile);
deviceIsMobile.addEventListener("change", () => {
  toggleSidebar(deviceIsMobile);
});

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      closeSidebar();
    } else {
      openSidebar();
    }
  } else {
    if (yDiff > 0) {
    } else {
    }
  }
  xDown = null;
  yDown = null;
}
