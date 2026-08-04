(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") root.dataset.theme = stored;

  function currentTheme() {
    if (root.dataset.theme) return root.dataset.theme;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateButton(btn) {
    var dark = currentTheme() === "dark";
    btn.textContent = dark ? "☀︎" : "☾";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    updateButton(btn);
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
      updateButton(btn);
    });
  });
})();
