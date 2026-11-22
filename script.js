/* Ganesh Patil — portfolio interactions */
(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var progress = document.getElementById("scroll-progress");
  var navLinks = Array.from(document.querySelectorAll(".nav-link"));
  var sections = Array.from(document.querySelectorAll("main section[id]"));
  var menuToggle = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- scroll state, progress, nav spy ---------- */
  var ticking = false;

  function updateScroll() {
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle("scrolled", y > 8);

    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) {
      progress.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";
    }

    var current = "home";
    for (var i = 0; i < sections.length; i++) {
      if (y >= sections[i].offsetTop - 150) current = sections[i].id;
    }
    navLinks.forEach(function (link) {
      var active = link.getAttribute("href") === "#" + current;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });

    var hint = document.getElementById("scroll-hint");
    if (hint) hint.style.opacity = Math.max(0, 1 - y / 260);

    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }, { passive: true });

  updateScroll();

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- mobile menu ---------- */
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  }

  function openMenu() {
    mobileMenu.classList.add("open");
    header.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
    document.body.classList.add("menu-open");
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      if (mobileMenu.classList.contains("open")) closeMenu();
      else openMenu();
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    var desktop = window.matchMedia("(min-width: 901px)");
    var onDesktop = function (e) { if (e.matches) closeMenu(); };
    if (desktop.addEventListener) desktop.addEventListener("change", onDesktop);
    else if (desktop.addListener) desktop.addListener(onDesktop);
  }

  /* ---------- hero code card parallax ---------- */
  var visual = document.getElementById("hero-visual");
  var codeCard = document.getElementById("code-card");
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  if (visual && codeCard && finePointer && !reduceMotion) {
    visual.addEventListener("pointermove", function (e) {
      var rect = visual.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      codeCard.style.transform =
        "rotateX(" + (-y * 5).toFixed(2) + "deg) rotateY(" + (x * 7).toFixed(2) + "deg) rotate(-1.4deg)";
    });

    visual.addEventListener("pointerleave", function () {
      codeCard.style.transform = "";
    });
  }

  /* ---------- copy email ---------- */
  var copyBtn = document.getElementById("copy-email");
  var copyLabel = document.getElementById("copy-label");
  var toast = document.getElementById("toast");
  var toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 2600);
  }

  function legacyCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); } catch (err) { /* no-op */ }
    document.body.removeChild(area);
  }

  if (copyBtn && copyLabel) {
    copyBtn.addEventListener("click", function () {
      var email = copyBtn.getAttribute("data-email");
      var done = function () {
        copyLabel.textContent = "Copied";
        copyBtn.classList.add("copied");
        showToast("Email copied — " + email);
        window.setTimeout(function () {
          copyLabel.textContent = "Copy email";
          copyBtn.classList.remove("copied");
        }, 2200);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(done).catch(function () {
          legacyCopy(email);
          done();
        });
      } else {
        legacyCopy(email);
        done();
      }
    });
  }

  /* ---------- misc ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  console.log(
    "%cGanesh Patil%c — backend engineer\nOpen to freelance work: gpatil54403081@gmail.com",
    "font-family:monospace;font-size:13px;font-weight:700;color:#8b93ff",
    "font-family:monospace;font-size:11px;color:#98a1b8"
  );
})();
