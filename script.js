/* =========================================================
   YUME — PREMIUM RESTAURANT
   SCRIPT.JS — 10/10 CINEMATIC EXPERIENCE
========================================================= */


/* =========================================================
   SUPABASE CONNECTION
========================================================= */

const SUPABASE_URL =
  "https://oayaquasaanmcumuoyij.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_9JYalSNjjfGBHHDPFTtLNA_wpawiT20";

const { createClient } = window.supabase;

const supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

let pendingReservation = null;

window.yumeConfirmedReservation = null;

console.log("YUME Supabase connected");


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const scrollIndicator =
  document.querySelector(".scroll-indicator");

  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {

        const target =
            document.querySelector(".table-section");

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });
}

  /* =======================================================
     ELEMENTS
  ======================================================= */

  const body =
    document.body;

  const nav =
    document.getElementById("nav");

  const menuToggle =
    document.getElementById("menuToggle");

  const navLinks =
    document.getElementById("navLinks");

  const topButton =
    document.getElementById("topButton");

  const scrollProgress =
    document.getElementById("scrollProgress");

  const introScreen =
    document.getElementById("introScreen");

  const reservationForm =
    document.getElementById("reservationForm");

  const reservationSuccess =
    document.getElementById("reservationSuccess");

  const finalReservation =
    document.getElementById("finalReservation");

  const tableConfirmation =
    document.querySelector(
      ".table-confirmation"
    );

  const editTable =
    document.getElementById("editTable");

  const confirmTableBtn =
    document.getElementById(
      "confirmTableBtn"
    );

  const newReservation =
    document.getElementById(
      "newReservation"
    );

  const tablePreview =
    document.getElementById(
      "tablePreview"
    );

  const dateInput =
    document.getElementById(
      "dateInput"
    );

  const timeSelect =
    document.getElementById(
      "timeSelect"
    );

  const tableSelect =
    document.getElementById(
      "tableSelect"
    );

  const guestsSelect =
    document.getElementById(
      "guestsSelect"
    );

  const contactForm =
    document.getElementById(
      "contactForm"
    );

  const globalPetals =
    document.getElementById(
      "globalPetals"
    );

  const heroPetals =
    document.getElementById(
      "petals"
    );

  const conciergeModal =
    document.getElementById(
      "conciergeModal"
    );

  const conciergeModalTitle =
    document.getElementById(
      "conciergeModalTitle"
    );

  const conciergeModalText =
    document.getElementById(
      "conciergeModalText"
    );

  const conciergeContactLink =
    document.getElementById(
      "conciergeContactLink"
    );

  const filters =
    document.querySelectorAll(
      ".filter"
    );

  const dishes =
    document.querySelectorAll(
      ".dish"
    );

  const reviews =
    document.querySelectorAll(
      ".review"
    );

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );

  const galleryItems =
    document.querySelectorAll(
      ".gallery-item"
    );

  const sections =
    document.querySelectorAll(
      "section, footer"
    );

  const languageButtons =
    document.querySelectorAll(
      ".language-button"
    );


  /* =======================================================
     TABLE CAPACITY
  ======================================================= */

  const tableCapacity = {

    1: 2,
    2: 2,
    3: 4,
    4: 4,
    5: 6,
    6: 6,
    7: 8,
    8: 2,
    9: 4,
    10: 4

  };


  /* =======================================================
     REDUCED MOTION
  ======================================================= */

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  /* =======================================================
     PAGE LOADER
  ======================================================= */

  const loader =
    document.querySelector(
      ".loader"
    );

  window.addEventListener(
    "load",
    () => {

      setTimeout(() => {

        if (loader) {
          loader.classList.add(
            "hide"
          );
        }

      }, 700);

    }
  );


  /* =======================================================
     INTRO SCREEN
  ======================================================= */
const exploreText = document.querySelector(".explore-text");
  function closeIntro() {

    if (!introScreen) {
      return;
    }

    introScreen.classList.add(
      "hide"
    );

    body.style.overflow = "";

  }

if (exploreText) {
    exploreText.addEventListener("click", closeIntro);
}

if (introScreen) {

  body.style.overflow =
    "hidden";

}


  /* =======================================================
     ESCAPE INTRO
  ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        introScreen &&
        !introScreen.classList.contains(
          "hide"
        )
      ) {

        closeIntro();

      }

    }
  );


  /* =======================================================
     NAVBAR
  ======================================================= */

  function updateNavbar() {

    const scrollY =
      window.scrollY;

    if (nav) {

      nav.classList.toggle(
        "scrolled",
        scrollY > 50
      );

    }

  }


  window.addEventListener(
    "scroll",
    updateNavbar,
    {
      passive: true
    }
  );

  updateNavbar();


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  function closeMobileMenu() {

    if (navLinks) {

      navLinks.classList.remove(
        "open"
      );

    }

    if (menuToggle) {

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
      );

    }

    body.classList.remove(
      "menu-open"
    );

  }


  if (
    menuToggle &&
    navLinks
  ) {

    menuToggle.addEventListener(
      "click",
      () => {

        const isOpen =
          navLinks.classList.toggle(
            "open"
          );

        body.classList.toggle(
          "menu-open",
          isOpen
        );

        menuToggle.setAttribute(
          "aria-expanded",
          String(isOpen)
        );

        menuToggle.setAttribute(
          "aria-label",
          isOpen
            ? "Close navigation"
            : "Open navigation"
        );

      }
    );


    navLinks
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          closeMobileMenu
        );

      });

  }


  /* =======================================================
     ESCAPE CLOSE MOBILE MENU
  ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeMobileMenu();

      }

    }
  );


  /* =======================================================
     SCROLL PROGRESS
  ======================================================= */

  function updateScrollProgress() {

    if (!scrollProgress) {
      return;
    }

    const documentHeight =
      document.documentElement
        .scrollHeight -
      window.innerHeight;

    if (documentHeight <= 0) {

      scrollProgress.style.width =
        "0%";

      return;

    }

    const progress =
      (
        window.scrollY /
        documentHeight
      ) * 100;

    scrollProgress.style.width =
      `${Math.min(
        100,
        Math.max(0, progress)
      )}%`;

  }


  window.addEventListener(
    "scroll",
    updateScrollProgress,
    {
      passive: true
    }
  );

  window.addEventListener(
    "resize",
    updateScrollProgress
  );

  updateScrollProgress();


  /* =======================================================
     BACK TO TOP
  ======================================================= */

  function updateTopButton() {

    if (!topButton) {
      return;
    }

    topButton.classList.toggle(
      "show",
      window.scrollY > 600
    );

  }


  window.addEventListener(
    "scroll",
    updateTopButton,
    {
      passive: true
    }
  );

  updateTopButton();


  if (topButton) {

    topButton.addEventListener(
      "click",
      () => {

        window.scrollTo({

          top: 0,

          behavior:
            reducedMotion
              ? "auto"
              : "smooth"

        });

      }
    );

  }


  /* =======================================================
     SMOOTH ANCHOR NAVIGATION
  ======================================================= */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute(
              "href"
            );

          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }

          let target;

          try {

            target =
              document.querySelector(
                targetId
              );

          } catch {

            return;

          }

          if (!target) {
            return;
          }

          event.preventDefault();

          const navHeight = nav ? nav.offsetHeight : 0;

const targetTop =
  target.getBoundingClientRect().top +
  window.scrollY -
  navHeight -
  20;

window.scrollTo({
  top: targetTop,
  behavior: reducedMotion ? "auto" : "smooth"
});

        }
      );

    });


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  if (
    "IntersectionObserver" in
    window
  ) {

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "visible"
                );

                revealObserver.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -50px 0px"
        }
      );


    revealElements.forEach(
      element => {

        revealObserver.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      element => {

        element.classList.add(
          "visible"
        );

      }
    );

  }


  /* =======================================================
     MENU STAGGER
  ======================================================= */

  dishes.forEach(
    (dish, index) => {

      dish.style.transitionDelay =
        reducedMotion
          ? "0s"
          : `${(index % 6) * 0.06}s`;

    }
  );


  /* =======================================================
     REVIEW STAGGER
  ======================================================= */

  reviews.forEach(
    (review, index) => {

      review.style.transitionDelay =
        reducedMotion
          ? "0s"
          : `${(index % 4) * 0.08}s`;

    }
  );


  /* =======================================================
     MENU FILTER
  ======================================================= */

  filters.forEach(
    filter => {

      filter.addEventListener(
        "click",
        () => {

          const category =
            filter.dataset.filter;

          filters.forEach(
            button => {

              const active =
                button === filter;

              button.classList.toggle(
                "active",
                active
              );

              button.setAttribute(
                "aria-pressed",
                String(active)
              );

            }
          );


          dishes.forEach(
            dish => {

              const dishCategory =
                dish.dataset.category;

              const shouldShow =
                category === "all" ||
                dishCategory === category;


              dish.classList.toggle(
                "filter-hidden",
                !shouldShow
              );


              if (
                shouldShow &&
                !reducedMotion
              ) {

                dish.animate(
                  [
                    {
                      opacity: 0,
                      transform:
                        "translateY(15px)"
                    },
                    {
                      opacity: 1,
                      transform:
                        "translateY(0)"
                    }
                  ],
                  {
                    duration: 420,
                    easing:
                      "cubic-bezier(.22,1,.36,1)"
                  }
                );

              }

            }
          );

        }
      );

    }
  );


  /* =======================================================
     GALLERY 3D DEPTH
  ======================================================= */

  if (!reducedMotion) {

    galleryItems.forEach(
      item => {

        item.addEventListener(
          "mousemove",
          event => {

            const rect =
              item.getBoundingClientRect();

            const x =
              event.clientX -
              rect.left;

            const y =
              event.clientY -
              rect.top;

            const rotateY =
              ((x / rect.width) -
                0.5) * 5;

            const rotateX =
              ((y / rect.height) -
                0.5) * -5;

            item.style.transform = `
              perspective(900px)
              rotateX(${rotateX}deg)
              rotateY(${rotateY}deg)
              scale(1.035)
            `;

          }
        );


        item.addEventListener(
          "mouseleave",
          () => {

            item.style.transform =
              "";

          }
        );

      }
    );

  }


  /* =======================================================
     DISH 3D DEPTH
  ======================================================= */

  if (!reducedMotion) {

    dishes.forEach(
      dish => {

        dish.addEventListener(
          "mousemove",
          event => {

            const rect =
              dish.getBoundingClientRect();

            const x =
              event.clientX -
              rect.left;

            const y =
              event.clientY -
              rect.top;

            const rotateY =
              ((x / rect.width) -
                0.5) * 2;

            const rotateX =
              ((y / rect.height) -
                0.5) * -2;

            dish.style.transform = `
              perspective(900px)
              rotateX(${rotateX}deg)
              rotateY(${rotateY}deg)
              translateY(-5px)
            `;

          }
        );


        dish.addEventListener(
          "mouseleave",
          () => {

            dish.style.transform =
              "";

          }
        );

      }
    );

  }


  /* =======================================================
     MAGNETIC BUTTONS
  ======================================================= */

  if (!reducedMotion) {

    document
      .querySelectorAll(
        ".magnetic"
      )
      .forEach(button => {

        button.addEventListener(
          "mousemove",
          event => {

            const rect =
              button.getBoundingClientRect();

            const x =
              event.clientX -
              rect.left -
              rect.width / 2;

            const y =
              event.clientY -
              rect.top -
              rect.height / 2;

            button.style.transform =
              `translate(
                ${x * 0.08}px,
                ${y * 0.08}px
              )`;

          }
        );


        button.addEventListener(
          "mouseleave",
          () => {

            button.style.transform =
              "";

          }
        );

      });

  }


  /* =======================================================
     BUTTON RIPPLE
  ======================================================= */

  document
    .querySelectorAll(
      ".btn, .nav-button, .filter"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        event => {

          const ripple =
            document.createElement(
              "span"
            );

          ripple.className =
            "button-ripple";

          const rect =
            button.getBoundingClientRect();

          ripple.style.left =
            `${event.clientX - rect.left}px`;

          ripple.style.top =
            `${event.clientY - rect.top}px`;

          button.appendChild(
            ripple
          );


          setTimeout(
            () => ripple.remove(),
            700
          );

        }
      );

    });


  /* =======================================================
     CINEMATIC PARALLAX
  ======================================================= */

  const heroBackground =
    document.querySelector(
      ".hero-background"
    );

  const experienceBackground =
    document.querySelector(
      ".experience-background"
    );

  const parallaxImages =
    document.querySelectorAll(
      ".table-image, .story-image, .chef-image, .gallery-item"
    );

  let scrollTicking =
    false;


  function cinematicScroll() {

    const scrollY =
      window.scrollY;


    if (
      heroBackground &&
      !reducedMotion
    ) {

      const heroMove =
        Math.min(
          scrollY * 0.08,
          90
        );

      heroBackground.style.setProperty(
        "--scroll-y",
        `${heroMove}px`
      );

    }


    if (
      experienceBackground &&
      !reducedMotion
    ) {

      const section =
        experienceBackground
          .parentElement;

      const rect =
        section.getBoundingClientRect();

      const movement =
        (
          rect.top -
          window.innerHeight / 2
        ) * -0.08;

      experienceBackground.style.setProperty(
        "--experience-y",
        `${movement}px`
      );

    }


    if (
      !reducedMotion
    ) {

      parallaxImages.forEach(
        image => {

          const rect =
            image.getBoundingClientRect();

          const center =
            rect.top +
            rect.height / 2;

          const distance =
            center -
            window.innerHeight / 2;

          if (
            Math.abs(distance) <
            window.innerHeight
          ) {

            let movement;

if (image.classList.contains("table-image")) {

    movement = distance * -0.045;

} else {

    movement = distance * -0.015;

}

image.style.backgroundPosition =
    `center calc(50% + ${movement}px)`;
          }

        }
      );

    }


    scrollTicking =
      false;

  }


  window.addEventListener(
    "scroll",
    () => {

      if (
        !scrollTicking
      ) {

        window.requestAnimationFrame(
          cinematicScroll
        );

        scrollTicking =
          true;

      }

    },
    {
      passive: true
    }
  );


  cinematicScroll();


  /* =======================================================
     CUSTOM CURSOR
  ======================================================= */

  const cursorDot =
    document.querySelector(
      ".cursor-dot"
    );

  const cursorRing =
    document.querySelector(
      ".cursor-ring"
    );


  if (
    cursorDot &&
    cursorRing &&
    !reducedMotion &&
    window.matchMedia(
      "(hover: hover)"
    ).matches
  ) {

    cursorDot.style.display =
      "block";

    cursorRing.style.display =
      "block";


    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener(
      "mousemove",
      event => {

        mouseX =
          event.clientX;

        mouseY =
          event.clientY;

        cursorDot.style.left =
          `${mouseX}px`;

        cursorDot.style.top =
          `${mouseY}px`;

      }
    );


    function animateCursor() {

      ringX +=
        (mouseX - ringX) *
        0.15;

      ringY +=
        (mouseY - ringY) *
        0.15;


      cursorRing.style.left =
        `${ringX}px`;

      cursorRing.style.top =
        `${ringY}px`;


      requestAnimationFrame(
        animateCursor
      );

    }


    animateCursor();


    document
      .querySelectorAll(
        "a, button, input, textarea, select"
      )
      .forEach(element => {

        element.addEventListener(
          "mouseenter",
          () => {

            cursorRing.classList.add(
              "big"
            );

          }
        );


        element.addEventListener(
          "mouseleave",
          () => {

            cursorRing.classList.remove(
              "big"
            );

          }
        );

      });

  }


  /* =======================================================
     TOUCH / CLICK PETAL EFFECT
  ======================================================= */

  function createTouchEffect(
    x,
    y
  ) {

    if (
      reducedMotion ||
      window.innerWidth < 700
    ) {
      return;
    }


    const ripple =
      document.createElement(
        "div"
      );

    ripple.className =
      "mouse-touch-ripple";

    ripple.style.left =
      `${x}px`;

    ripple.style.top =
      `${y}px`;

    document.body.appendChild(
      ripple
    );


    const petalCount = 5;


    for (
      let i = 0;
      i < petalCount;
      i++
    ) {

      const petal =
        document.createElement(
          "div"
        );

      petal.className =
        "mouse-touch-petal";


      const angle =
        (
          Math.PI * 2 * i
        ) / petalCount;


      const distance =
        30 +
        Math.random() * 35;


      const moveX =
        Math.cos(angle) *
        distance;


      const moveY =
        Math.sin(angle) *
        distance;


      petal.style.left =
        `${x}px`;

      petal.style.top =
        `${y}px`;


      petal.style.setProperty(
        "--x",
        `${moveX}px`
      );

      petal.style.setProperty(
        "--y",
        `${moveY}px`
      );


      document.body.appendChild(
        petal
      );


      setTimeout(
        () => petal.remove(),
        1100
      );

    }


    setTimeout(
      () => ripple.remove(),
      900
    );

  }


  document.addEventListener(
    "click",
    event => {

      if (
        event.target.closest(
          "button, input, textarea, select"
        )
      ) {
        return;
      }

      createTouchEffect(
        event.clientX,
        event.clientY
      );

    }
  );


  /* =======================================================
     GLOBAL FALLING PETALS
     TOP → BOTTOM OF ENTIRE PAGE
  ======================================================= */

  function createGlobalPetal() {

    if (!globalPetals) {
      return;
    }


    const petal =
      document.createElement(
        "span"
      );

    petal.className =
      "global-petal";


    const size =
      7 +
      Math.random() * 10;

    const left =
      Math.random() * 100;

    const duration =
      12 +
      Math.random() * 12;

    const delay =
      Math.random() * 4;

    const drift =
      -180 +
      Math.random() * 360;

    const rotation =
      Math.random() * 720 -
      360;


    petal.style.left =
      `${left}%`;

    petal.style.width =
      `${size}px`;

    petal.style.height =
      `${size * 0.68}px`;

    petal.style.setProperty(
      "--petal-drift",
      `${drift}px`
    );

    petal.style.setProperty(
      "--petal-rotation",
      `${rotation}deg`
    );

    petal.style.animationDuration =
      `${duration}s`;

    petal.style.animationDelay =
      `${delay}s`;


    globalPetals.appendChild(
      petal
    );


    setTimeout(
      () => {

        petal.remove();

      },
      (
        duration +
        delay +
        1
      ) * 1000
    );

  }


  function startGlobalPetals() {

    if (
      !globalPetals ||
      reducedMotion
    ) {
      return;
    }


    const initialCount =
      window.innerWidth < 700
        ? 18
        : 34;


    for (
      let i = 0;
      i < initialCount;
      i++
    ) {

      const petal =
        document.createElement(
          "span"
        );

      petal.className =
        "global-petal";


      const size =
        7 +
        Math.random() * 10;

      const left =
        Math.random() * 100;

      const duration =
        12 +
        Math.random() * 12;

      const delay =
        Math.random() * 12;

      const drift =
        -180 +
        Math.random() * 360;

      const rotation =
        Math.random() * 720 -
        360;


      petal.style.left =
        `${left}%`;

      petal.style.width =
        `${size}px`;

      petal.style.height =
        `${size * 0.68}px`;

      petal.style.setProperty(
        "--petal-drift",
        `${drift}px`
      );

      petal.style.setProperty(
        "--petal-rotation",
        `${rotation}deg`
      );

      petal.style.animationDuration =
        `${duration}s`;

      petal.style.animationDelay =
        `${-delay}s`;


      globalPetals.appendChild(
        petal
      );

    }


    setInterval(
      createGlobalPetal,
      1300
    );

  }


  startGlobalPetals();


  /* =======================================================
     HERO PETALS
  ======================================================= */

  if (
    heroPetals &&
    !reducedMotion
  ) {

    const petalCount =
      window.innerWidth < 700
        ? 12
        : 22;


    for (
      let i = 0;
      i < petalCount;
      i++
    ) {

      const petal =
        document.createElement(
          "span"
        );

      petal.className =
        "petal";


      petal.style.left =
        `${Math.random() * 100}%`;


      petal.style.setProperty(
        "--drift",
        `${-120 + Math.random() * 240}px`
      );


      petal.style.animationDuration =
        `${7 + Math.random() * 8}s`;


      petal.style.animationDelay =
        `${Math.random() * 8}s`;


      petal.style.transform =
        `scale(
          ${0.6 + Math.random() * 0.8}
        )`;


      heroPetals.appendChild(
        petal
      );

    }

  }

  /* =======================================================
     LANGUAGE SWITCHER
  ======================================================= */

  const translations = {

    en: {

      "nav.home":
        "Home",

      "nav.story":
        "Story",

      "nav.menu":
        "Menu",

      "nav.experience":
        "Experience",

      "nav.reserve":
        "Reserve",

      "nav.reviews":
        "Reviews",

      "nav.gallery":
        "Gallery",

      "nav.contact":
        "Contact",

      "nav.reserveTable":
        "Reserve a Table"

    },


    ja: {

      "nav.home":
        "ホーム",

      "nav.story":
        "物語",

      "nav.menu":
        "メニュー",

      "nav.experience":
        "体験",

      "nav.reserve":
        "予約",

      "nav.reviews":
        "レビュー",

      "nav.gallery":
        "ギャラリー",

      "nav.contact":
        "お問い合わせ",

      "nav.reserveTable":
        "席を予約する"

    }

  };


  function setLanguage(
    language
  ) {

    const dictionary =
      translations[
        language
      ] ||
      translations.en;


    document
      .querySelectorAll(
        "[data-i18n]"
      )
      .forEach(element => {

        const key =
          element.dataset.i18n;

        if (
          dictionary[key]
        ) {

          element.textContent =
            dictionary[key];

        }

      });


    languageButtons.forEach(
      button => {

        const active =
          button.dataset.lang ===
          language;

        button.classList.toggle(
          "active",
          active
        );

        button.setAttribute(
          "aria-pressed",
          String(active)
        );

      }
    );


    document.documentElement.lang =
      language === "ja"
        ? "ja"
        : "en";


    try {

      localStorage.setItem(
        "yume-language",
        language
      );

    } catch {

      /* localStorage unavailable */

    }

  }


  languageButtons.forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          setLanguage(
            button.dataset.lang
          );

        }
      );

    }
  );


  try {

    const savedLanguage =
      localStorage.getItem(
        "yume-language"
      );

    if (
      savedLanguage &&
      translations[savedLanguage]
    ) {

      setLanguage(
        savedLanguage
      );

    }

  } catch {

    setLanguage("en");

  }


  /* =======================================================
     CONCIERGE MODAL
  ======================================================= */

  const conciergeContent = {

    private: {

      title:
        "Private Dining",

      text:
        "Create an intimate YUME evening for family, proposals, celebrations or private gatherings. Tell us the occasion and we will shape the details around you."

    },


    events: {

      title:
        "Events & Celebrations",

      text:
        "From intimate birthdays to sophisticated private events, YUME can create a dining experience designed around your guests, timing and atmosphere."

    },


    gifts: {

      title:
        "Gift Experiences",

      text:
        "Give someone a YUME memory. Request a dining experience voucher and our team can help arrange a beautifully considered gift."

    },


    chef: {

      title:
        "Chef's Table",

      text:
        "Come closer to the kitchen. The Chef's Table offers a more personal look at seasonal ingredients, technique and the story behind each course."

    }

  };


  function openConcierge(
    type
  ) {

    if (
      !conciergeModal
    ) {
      return;
    }


    const content =
      conciergeContent[type];


    if (!content) {
      return;
    }


    if (
      conciergeModalTitle
    ) {

      conciergeModalTitle.innerHTML =
        `${content.title}`;

    }


    if (
      conciergeModalText
    ) {

      conciergeModalText.textContent =
        content.text;

    }


    if (
      conciergeContactLink
    ) {

      conciergeContactLink.href =
        "#contact";

    }


    conciergeModal.classList.add(
      "open"
    );

    conciergeModal.setAttribute(
      "aria-hidden",
      "false"
    );

    body.classList.add(
      "modal-open"
    );


    const closeButton =
      conciergeModal.querySelector(
        ".concierge-close"
      );

    if (closeButton) {

      setTimeout(
        () => closeButton.focus(),
        50
      );

    }

  }


  function closeConcierge() {

    if (
      !conciergeModal
    ) {
      return;
    }


    conciergeModal.classList.remove(
      "open"
    );

    conciergeModal.setAttribute(
      "aria-hidden",
      "true"
    );

    body.classList.remove(
      "modal-open"
    );

  }


  document
    .querySelectorAll(
      "[data-open-concierge]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          openConcierge(
            button.dataset.openConcierge
          );

        }
      );

    });


  document
    .querySelectorAll(
      "[data-close-concierge]"
    )
    .forEach(element => {

      element.addEventListener(
        "click",
        closeConcierge
      );

    });


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeConcierge();

      }

    }
  );


  /* =======================================================
     RESERVATION HELPERS
  ======================================================= */

  function setReservationButton(
    text,
    disabled = false
  ) {

    const button =
      reservationForm?.querySelector(
        ".reservation-button"
      );

    if (!button) {
      return;
    }

    button.disabled =
      disabled;

    button.textContent =
      text;

  }


  function getTableNumber() {

    const value =
      tableSelect?.value || "";

    return parseInt(
      String(value)
        .replace(/\D/g, ""),
      10
    );

  }


  function resetTableOptions() {

    if (!tableSelect) {
      return;
    }


    Array.from(
      tableSelect.options
    ).forEach(
      option => {

        if (!option.value) {
          return;
        }


        const number =
          parseInt(
            String(option.value)
              .replace(/\D/g, ""),
            10
          );


        const capacity =
          tableCapacity[number];


        option.disabled =
          false;


        option.textContent =
          capacity
            ? `Table ${String(number).padStart(2, "0")} — ${capacity} Guests`
            : `Table ${String(number).padStart(2, "0")}`;

      }
    );

  }


  /* =======================================================
     CHECK TABLE AVAILABILITY
  ======================================================= */

  async function checkTableAvailability() {

    if (
      !dateInput ||
      !timeSelect ||
      !tableSelect ||
      !guestsSelect
    ) {
      return;
    }


    const selectedDate =
      dateInput.value;

    const selectedTime =
      timeSelect.value;

    const selectedGuests =
      parseInt(
        guestsSelect.value,
        10
      );


    if (
      !selectedDate ||
      !selectedTime
    ) {

      resetTableOptions();

      return;

    }


    try {

      const {
        data: bookedTables,
        error
      } =
        await supabaseClient
          .from("reservations")
          .select(
            "table_number"
          )
          .eq(
            "reservation_date",
            selectedDate
          )
          .eq(
            "reservation_time",
            selectedTime
          );


      if (error) {

        console.error(
          "Availability error:",
          error
        );

        return;

      }


      const bookedNumbers =
        (bookedTables || [])
          .map(
            row =>
              Number(
                row.table_number
              )
          )
          .filter(
            Number.isFinite
          );


      Array.from(
        tableSelect.options
      ).forEach(
        option => {

          if (!option.value) {
            return;
          }


          const tableNumber =
            parseInt(
              String(option.value)
                .replace(/\D/g, ""),
              10
            );


          const capacity =
            tableCapacity[
              tableNumber
            ];


          const isBooked =
            bookedNumbers.includes(
              tableNumber
            );


          const isTooSmall =
            selectedGuests &&
            capacity &&
            capacity <
            selectedGuests;


          option.disabled =
            isBooked ||
            isTooSmall;


          let label =
            `Table ${String(tableNumber).padStart(2, "0")}`;


          if (capacity) {

            label +=
              ` — ${capacity} Guests`;

          }


          if (isBooked) {

            label +=
              " — Reserved";

          }


          if (
            isTooSmall
          ) {

            label +=
              " — Too Small";

          }


          option.textContent =
            label;

        }
      );


      const currentTable =
        getTableNumber();


      if (
        currentTable &&
        (
          bookedNumbers.includes(
            currentTable
          ) ||
          (
            tableCapacity[
              currentTable
            ] &&
            tableCapacity[
              currentTable
            ] <
            selectedGuests
          )
        )
      ) {

        tableSelect.value =
          "";

      }


    } catch (error) {

      console.error(
        "YUME availability error:",
        error
      );

    }

  }


  dateInput?.addEventListener(
    "change",
    checkTableAvailability
  );


  timeSelect?.addEventListener(
    "change",
    checkTableAvailability
  );


  guestsSelect?.addEventListener(
    "change",
    checkTableAvailability
  );


  /* =======================================================
   RESERVATION DATE RANGE
   TODAY → EXACTLY 2 MONTHS
======================================================= */

if (dateInput) {

  const today =
    new Date();

  today.setHours(
    0,
    0,
    0,
    0
  );


  const maxDate =
    new Date(today);

  maxDate.setMonth(
    maxDate.getMonth() + 2
  );


  /* Handle months with fewer days */

  if (
    maxDate.getDate() !==
    today.getDate()
  ) {

    maxDate.setDate(0);

  }


  function formatDate(date) {

    const year =
      date.getFullYear();

    const month =
      String(
        date.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        date.getDate()
      ).padStart(2, "0");

    return `${year}-${month}-${day}`;

  }


  dateInput.min =
    formatDate(today);

  dateInput.max =
    formatDate(maxDate);

}

  /* =======================================================
     RESERVATION FORM SUBMIT
  ======================================================= */

  if (reservationForm) {

    reservationForm.addEventListener(
      "submit",
      async event => {

        event.preventDefault();


        if (
          !reservationForm.checkValidity()
        ) {

          reservationForm.reportValidity();

          return;

        }


        setReservationButton(
          "CHECKING...",
          true
        );


        const formData =
          new FormData(
            reservationForm
          );


        const name =
          String(
            formData.get("name") || ""
          ).trim();


        const email =
          String(
            formData.get("email") || ""
          ).trim();


        const phone =
          String(
            formData.get("phone") || ""
          ).trim();


        const guestsValue =
          String(
            formData.get("guests") || ""
          );


        const guests =
          parseInt(
            guestsValue,
            10
          );


        const tableValue =
          String(
            formData.get("table") || ""
          );


        const tableNumber =
          parseInt(
            tableValue.replace(
              /\D/g,
              ""
            ),
            10
          );


        const reservationDate =
          String(
            formData.get("date") || ""
          );


        const reservationTime =
          String(
            formData.get("time") || ""
          );


        const specialRequest =
          String(
            formData.get("request") || ""
          ).trim();


        /* -----------------------------------------------
           VALIDATE TABLE
        ------------------------------------------------ */

        if (
          !Number.isFinite(
            tableNumber
          ) ||
          tableNumber < 1 ||
          tableNumber > 10
        ) {

          alert(
            "Please select a valid table."
          );

          setReservationButton(
            "Reserve Table →",
            false
          );

          return;

        }


        /* -----------------------------------------------
           VALIDATE CAPACITY
        ------------------------------------------------ */

        if (
          tableCapacity[
            tableNumber
          ] < guests
        ) {

          alert(
            "This table cannot accommodate the selected number of guests."
          );

          await checkTableAvailability();

          setReservationButton(
            "Reserve Table →",
            false
          );

          return;

        }


        /* -----------------------------------------------
           FINAL AVAILABILITY CHECK
        ------------------------------------------------ */

        try {

          const {
            data: existingBookings,
            error
          } =
            await supabaseClient
              .from("reservations")
              .select(
                "table_number"
              )
              .eq(
                "reservation_date",
                reservationDate
              )
              .eq(
                "reservation_time",
                reservationTime
              )
              .eq(
                "table_number",
                tableNumber
              );


          if (error) {

            console.error(
              "Availability check failed:",
              error
            );

            alert(
              "Could not check table availability.\n\nPlease try again."
            );

            setReservationButton(
              "Reserve Table →",
              false
            );

            return;

          }


          if (
            existingBookings &&
            existingBookings.length
          ) {

            alert(
              "Sorry, this table is already reserved for the selected date and time.\n\nPlease choose another table or time."
            );

            await checkTableAvailability();

            setReservationButton(
              "Reserve Table →",
              false
            );

            return;

          }

        } catch (error) {

          console.error(
            "Final availability error:",
            error
          );

          alert(
            "Could not check table availability.\n\nPlease try again."
          );

          setReservationButton(
            "Reserve Table →",
            false
          );

          return;

        }


        /* -----------------------------------------------
           BOOKING CODE
        ------------------------------------------------ */

        const bookingCode =
          "YUME-" +
          Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();


        /* -----------------------------------------------
           PENDING RESERVATION
        ------------------------------------------------ */

        pendingReservation = {

          name,

          email,

          phone,

          guests,

          table_number:
            tableNumber,

          reservation_date:
            reservationDate,

          reservation_time:
            reservationTime,

          special_request:
            specialRequest,

          booking_code:
            bookingCode

        };


        console.log(
          "Pending reservation:",
          pendingReservation
        );


        /* -----------------------------------------------
           FILL CONFIRMATION
        ------------------------------------------------ */

        const bookingCodeDisplay =
          document.getElementById(
            "bookingCodeDisplay"
          );

        const confirmName =
          document.getElementById(
            "confirmName"
          );

        const confirmEmail =
          document.getElementById(
            "confirmEmail"
          );

        const confirmPhone =
          document.getElementById(
            "confirmPhone"
          );

        const confirmGuests =
          document.getElementById(
            "confirmGuests"
          );

        const confirmSuccessTable =
          document.getElementById(
            "confirmSuccessTable"
          );

        const confirmDate =
          document.getElementById(
            "confirmDate"
          );

        const confirmTime =
          document.getElementById(
            "confirmTime"
          );

        const confirmRequest =
          document.getElementById(
            "confirmRequest"
          );


        if (
          bookingCodeDisplay
        ) {

          bookingCodeDisplay.textContent =
            bookingCode;

        }


        if (confirmName) {

          confirmName.textContent =
            name;

        }


        if (confirmEmail) {

          confirmEmail.textContent =
            email;

        }


        if (confirmPhone) {

          confirmPhone.textContent =
            phone;

        }


        if (confirmGuests) {

          confirmGuests.textContent =
            `${guests} Guests`;

        }


        if (tablePreview) {

          tablePreview.textContent =
            `Table ${String(
              tableNumber
            ).padStart(2, "0")}`;

        }


        if (
          confirmSuccessTable
        ) {

          confirmSuccessTable.textContent =
            `Table ${String(
              tableNumber
            ).padStart(2, "0")}`;

        }


        if (confirmDate) {

          confirmDate.textContent =
            reservationDate;

        }


        if (confirmTime) {

          confirmTime.textContent =
            reservationTime;

        }


        if (confirmRequest) {

          confirmRequest.textContent =
            specialRequest ||
            "None";

        }


        /* -----------------------------------------------
           SHOW CONFIRMATION
        ------------------------------------------------ */

        if (finalReservation) {

          finalReservation.style.display =
            "none";

        }


        if (tableConfirmation) {

          tableConfirmation.style.display =
            "block";

        }


        if (reservationSuccess) {

          reservationSuccess.classList.add(
            "show"
          );

          reservationSuccess.classList.remove(
            "confirmed"
          );

        }


        setReservationButton(
          "Reserve Table →",
          false
        );

      }
    );

  }


  /* =======================================================
   EDIT TABLE — PRESERVE FORM DATA
======================================================= */

if (editTable) {

  editTable.addEventListener(
    "click",
    async () => {

      /*
        Keep the user's entered form values.
        Do NOT reset the form.
      */

      if (reservationSuccess) {

        reservationSuccess.classList.remove(
          "show"
        );

        reservationSuccess.classList.remove(
          "confirmed"
        );

      }


      if (finalReservation) {

        finalReservation.style.display =
          "none";

      }


      if (tableConfirmation) {

        tableConfirmation.style.display =
          "none";

      }


      /*
        Re-check availability for the
        same date, time and guest count.
      */

      await checkTableAvailability();


      /*
        Restore the previously selected table
        if it is still available.
      */

      if (
        pendingReservation &&
        tableSelect
      ) {

        const previousTable =
          String(
            pendingReservation.table_number
          );

        const tableOption =
          Array.from(
            tableSelect.options
          ).find(
            option =>
              parseInt(
                String(option.value)
                  .replace(/\D/g, ""),
                10
              ) ===
              Number(previousTable)
          );


        if (
          tableOption &&
          !tableOption.disabled
        ) {

          tableSelect.value =
            tableOption.value;

          if (tablePreview) {

            tablePreview.textContent =
              `Table ${String(
                pendingReservation.table_number
              ).padStart(2, "0")}`;

          }

        }

      }


      setReservationButton(
        "Reserve Table →",
        false
      );

    }
  );

}


  /* =======================================================
   EDIT TABLE — PRESERVE FORM DATA
======================================================= */

if (editTable) {

  editTable.addEventListener(
    "click",
    async () => {

      /*
        Keep the user's entered form values.
        Do NOT reset the form.
      */

      if (reservationSuccess) {

        reservationSuccess.classList.remove(
          "show"
        );

        reservationSuccess.classList.remove(
          "confirmed"
        );

      }


      if (finalReservation) {

        finalReservation.style.display =
          "none";

      }


      if (tableConfirmation) {

        tableConfirmation.style.display =
          "none";

      }


      /*
        Re-check availability for the
        same date, time and guest count.
      */

      await checkTableAvailability();


      /*
        Restore the previously selected table
        if it is still available.
      */

      if (
        pendingReservation &&
        tableSelect
      ) {

        const previousTable =
          String(
            pendingReservation.table_number
          );

        const tableOption =
          Array.from(
            tableSelect.options
          ).find(
            option =>
              parseInt(
                String(option.value)
                  .replace(/\D/g, ""),
                10
              ) ===
              Number(previousTable)
          );


        if (
          tableOption &&
          !tableOption.disabled
        ) {

          tableSelect.value =
            tableOption.value;

          if (tablePreview) {

            tablePreview.textContent =
              `Table ${String(
                pendingReservation.table_number
              ).padStart(2, "0")}`;

          }

        }

      }


      setReservationButton(
        "Reserve Table →",
        false
      );

    }
  );

}

/* =======================================================
   CONFIRM TABLE
======================================================= */

if (confirmTableBtn) {

  confirmTableBtn.addEventListener(
    "click",
    async () => {

      if (!pendingReservation) {

        alert(
          "Please complete the reservation form first."
        );

        return;
      }


      confirmTableBtn.disabled = true;

      confirmTableBtn.textContent =
        "CONFIRMING...";


      try {

        const {
          data,
          error
        } = await supabaseClient
          .from("reservations")
          .insert([
            pendingReservation
          ])
          .select();


        /* ================================
           DATABASE ERROR
        ================================= */

        if (error) {

          console.error(
            "YUME reservation error:",
            error
          );


          if (error.code === "23505") {

            alert(
              "This table is already reserved for the selected date and time.\n\nPlease choose another table or time."
            );

            await checkTableAvailability();

          } else {

            alert(
              "Reservation failed.\n\n" +
              error.message
            );

          }


          confirmTableBtn.disabled = false;

          confirmTableBtn.textContent =
            "CONFIRM TABLE";

          return;
        }


        /* ================================
           DATABASE SUCCESS
        ================================= */

        console.log(
          "YUME booking confirmed:",
          data
        );
      /* ================================
   SEND CONFIRMATION EMAIL
================================ */

const confirmedReservation = {
  ...pendingReservation
};

const {
  data: emailData,
  error: emailError
} = await supabaseClient.functions.invoke(
  "yume-booking-confirmation",
  {
    body: confirmedReservation
  }
);

if (emailError) {

  console.error(
    "YUME confirmation email error:",
    emailError
  );

} else {

  console.log(
    "YUME confirmation email sent:",
    emailData
  );
}

        confirmTableBtn.textContent =
          "CONFIRMED ✓";


        /* ================================
           SAVE CONFIRMED RESERVATION
        ================================= */

        window.yumeConfirmedReservation = {
          ...pendingReservation
        };


        /* ================================
           SHOW SUCCESS
        ================================= */

        if (reservationSuccess) {

          reservationSuccess.classList.add(
            "show"
          );

          reservationSuccess.classList.add(
            "confirmed"
          );

        }


        if (tableConfirmation) {

          tableConfirmation.style.display =
            "none";

        }


        if (finalReservation) {

          finalReservation.style.display =
            "block";

        }


        /* ================================
           CANCEL BUTTON
        ================================= */

        addCancelBookingButton();


        /* ================================
           RESERVATION BUTTON
        ================================= */

        setReservationButton(
          "RESERVED ✓",
          true
        );


        /* ================================
           CLEAR PENDING STATE
        ================================= */

        pendingReservation = null;

      }

      catch (error) {

        console.error(
          "YUME confirmation error:",
          error
        );


        alert(
          "Reservation failed.\n\n" +
          error.message
        );


        confirmTableBtn.disabled = false;

        confirmTableBtn.textContent =
          "CONFIRM TABLE";

      }

    }
  );

}

  /* =======================================================
     ADD CANCEL BUTTON
  ======================================================= */

  function addCancelBookingButton() {

    if (
      !finalReservation
    ) {
      return;
    }


    let cancelButton =
      document.getElementById(
        "cancelBookingBtn"
      );


    if (cancelButton) {
      return;
    }


    cancelButton =
      document.createElement(
        "button"
      );


    cancelButton.type =
      "button";


    cancelButton.id =
      "cancelBookingBtn";


    cancelButton.className =
      "cancel-booking-button";


    cancelButton.textContent =
      "CANCEL BOOKING";


    cancelButton.setAttribute(
      "aria-label",
      "Cancel this reservation"
    );


    cancelButton.addEventListener(
      "click",
      cancelBooking
    );


    finalReservation.appendChild(
      cancelButton
    );

  }


  /* =======================================================
     CANCEL BOOKING
  ======================================================= */

  async function cancelBooking() {

    const reservation =
      window.yumeConfirmedReservation;


    if (!reservation) {

      alert(
        "Booking details could not be found."
      );

      return;

    }


    const shouldCancel =
      window.confirm(
        "Are you sure you want to cancel this reservation?\n\n" +
        "Booking Code: " +
        reservation.booking_code +
        "\n" +
        "Table: " +
        String(
          reservation.table_number
        ).padStart(2, "0") +
        "\n" +
        "Date: " +
        reservation.reservation_date +
        "\n" +
        "Time: " +
        reservation.reservation_time
      );


    if (!shouldCancel) {
      return;
    }


    const cancelButton =
      document.getElementById(
        "cancelBookingBtn"
      );


    if (cancelButton) {

      cancelButton.disabled =
        true;

      cancelButton.textContent =
        "CANCELLING...";

    }


    try {

      const {
        error
      } =
        await supabaseClient
          .from(
            "reservations"
          )
          .delete()
          .eq(
            "booking_code",
            reservation.booking_code
          )
          .eq(
            "email",
            reservation.email
          );


      if (error) {

        console.error(
          "Cancel booking error:",
          error
        );


        alert(
          "Could not cancel the reservation.\n\n" +
          error.message
        );


        if (cancelButton) {

          cancelButton.disabled =
            false;

          cancelButton.textContent =
            "CANCEL BOOKING";

        }


        return;

      }


      console.log(
        "YUME booking cancelled:",
        reservation.booking_code
      );


      if (finalReservation) {

        finalReservation.innerHTML = `

          <div class="cancelled-message">

            <div
              style="
                font-size:34px;
                margin-bottom:18px;
              "
            >
              ✦
            </div>

            <h3>
              Your reservation has been cancelled.
            </h3>

            <p>
              Your table is now available again.
            </p>

            <p style="margin-top:18px;">

              Booking Code:
              <strong>
                ${escapeHTML(
                  reservation.booking_code
                )}
              </strong>

            </p>

            <button
              type="button"
              id="newReservationAfterCancel"
              class="cancelled-new-button"
            >
              MAKE ANOTHER RESERVATION
            </button>

          </div>

        `;


        finalReservation.style.display =
          "block";

      }


      window.yumeConfirmedReservation =
        null;


      const newAfterCancel =
        document.getElementById(
          "newReservationAfterCancel"
        );


      newAfterCancel?.addEventListener(
        "click",
        resetReservation
      );


    } catch (error) {

      console.error(
        "YUME cancel error:",
        error
      );


      alert(
        "Cancellation failed.\n\n" +
        error.message
      );


      if (cancelButton) {

        cancelButton.disabled =
          false;

        cancelButton.textContent =
          "CANCEL BOOKING";

      }

    }

  }


  /* =======================================================
     SAFE HTML ESCAPE
  ======================================================= */

  function escapeHTML(
    value
  ) {

    const div =
      document.createElement(
        "div"
      );

    div.textContent =
      String(value);

    return div.innerHTML;

  }


  /* =======================================================
     RESET RESERVATION
  ======================================================= */

  function resetReservation() {

    pendingReservation =
      null;

    window.yumeConfirmedReservation =
      null;


    if (reservationSuccess) {

      reservationSuccess.classList.remove(
        "show"
      );

      reservationSuccess.classList.remove(
        "confirmed"
      );

    }


    if (
      tableConfirmation
    ) {

      tableConfirmation.style.display =
        "";

    }


    if (finalReservation) {

      finalReservation.style.display =
        "none";

      finalReservation.innerHTML = `

        <h3>
          Your moment is reserved.
        </h3>

        <p>
          Thank you.
          We look forward to welcoming you to YUME.
        </p>

        <p class="booking-code-display">

          Booking Code:
          <strong
            id="bookingCodeDisplay"
          ></strong>

        </p>

        <div class="booking-details">

          <p>
            <strong>Name:</strong>
            <span id="confirmName"></span>
          </p>

          <p>
            <strong>Email:</strong>
            <span id="confirmEmail"></span>
          </p>

          <p>
            <strong>Phone:</strong>
            <span id="confirmPhone"></span>
          </p>

          <p>
            <strong>Guests:</strong>
            <span id="confirmGuests"></span>
          </p>

          <p>
            <strong>Table:</strong>
            <span id="confirmSuccessTable"></span>
          </p>

          <p>
            <strong>Date:</strong>
            <span id="confirmDate"></span>
          </p>

          <p>
            <strong>Time:</strong>
            <span id="confirmTime"></span>
          </p>

          <p>
            <strong>Special Request:</strong>
            <span id="confirmRequest"></span>
          </p>

        </div>

      `;

    }


    if (
      reservationForm
    ) {

      reservationForm.reset();

    }


    resetTableOptions();


    setReservationButton(
      "Reserve Table →",
      false
    );


    if (
      confirmTableBtn
    ) {

      confirmTableBtn.disabled =
        false;

      confirmTableBtn.textContent =
        "CONFIRM TABLE";

    }


    if (
      tablePreview
    ) {

      tablePreview.textContent =
        "";

    }

  }


  /* =======================================================
     MAKE ANOTHER RESERVATION
  ======================================================= */

  if (newReservation) {

    newReservation.addEventListener(
      "click",
      resetReservation
    );

  }


  /* =======================================================
     CONTACT FORM
  ======================================================= */

  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();


        if (
          !contactForm.checkValidity()
        ) {

          contactForm.reportValidity();

          return;

        }


        const button =
          contactForm.querySelector(
            "button"
          );


        if (!button) {
          return;
        }


        const originalText =
          button.textContent;


        button.disabled =
          true;

        button.textContent =
          "MESSAGE SENT ✓";


        setTimeout(
          () => {

            button.textContent =
              originalText;

            button.disabled =
              false;

            contactForm.reset();

          },
          2200
        );

      }
    );

  }


  /* =======================================================
     INTERACTIVE SECTION EFFECT
  ======================================================= */

  if (!reducedMotion) {

    sections.forEach(
      section => {

        section.addEventListener(
          "mouseenter",
          () => {

            section.classList.add(
              "cinematic-active"
            );

          }
        );


        section.addEventListener(
          "mouseleave",
          () => {

            section.classList.remove(
              "cinematic-active"
            );

          }
        );

      }
    );

  }


  /* =======================================================
     KEYBOARD FOCUS
  ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Tab"
      ) {

        body.classList.add(
          "keyboard-user"
        );

      }

    }
  );


  document.addEventListener(
    "mousedown",
    () => {

      body.classList.remove(
        "keyboard-user"
      );

    }
  );


  /* =======================================================
     PERFORMANCE — PAUSE HEAVY PETALS WHEN TAB HIDDEN
  ======================================================= */

  document.addEventListener(
    "visibilitychange",
    () => {

      if (document.hidden) {

        /*
          Do not pause restaurant ambience automatically.
          Only reduce visual workload.
        */

        body.classList.add(
          "page-hidden"
        );

      } else {

        body.classList.remove(
          "page-hidden"
        );

      }

    }
  );


  /* =======================================================
     RESIZE SAFETY
  ======================================================= */

  window.addEventListener(
    "resize",
    () => {

      if (
        window.innerWidth > 900
      ) {

        closeMobileMenu();

      }

    }
  );


  /* =======================================================
     BASIC YUME QA
  ======================================================= */

  function runYumeQA() {

    const requiredIds = [

      "nav",

      "menuToggle",

      "navLinks",

      "reservationForm",

      "reservationSuccess",

      "tablePreview",

      "editTable",

      "confirmTableBtn",

      "finalReservation",

      "newReservation",

      "dateInput",

      "timeSelect",

      "tableSelect",

      "guestsSelect",

      "contactForm",

    ];


    const missing =
      requiredIds.filter(
        id =>
          !document.getElementById(
            id
          )
      );


    if (missing.length) {

      console.warn(
        "YUME QA — Missing IDs:",
        missing
      );

    } else {

      console.log(
        "YUME QA — Core elements OK ✓"
      );

    }


    const navCount =
      document.querySelectorAll(
        ".nav-links a"
      ).length;


    if (navCount < 5) {

      console.warn(
        "YUME QA — Navigation may be incomplete."
      );

    }


    const dishCount =
      document.querySelectorAll(
        ".dish"
      ).length;


    console.log(
      `YUME QA — ${dishCount} menu items detected.`
    );


    const reviewCount =
      document.querySelectorAll(
        ".review"
      ).length;


    console.log(
      `YUME QA — ${reviewCount} reviews detected.`
    );


    console.log(
      "YUME QA — Premium system initialized ✓"
    );

  }


  runYumeQA();
});

/* =====================================================
   YUME — ENDING PETALS
===================================================== */

const endingPetals = document.querySelector(".ending-petals");

if (endingPetals && !endingPetals.children.length) {

    for (let i = 0; i < 12; i++) {

        const petal = document.createElement("span");

        endingPetals.appendChild(petal);
    }
}
/* =========================================================
   YUME MENU — FINAL MENU SYSTEM
   MENU CARD + CATEGORIES + DISHES
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuRoot =
        document.querySelector("#yume-menu");

    if (!menuRoot) {
        return;
    }


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const coverScreen =
        menuRoot.querySelector(".yume-menu-cover");

    const categoriesScreen =
        menuRoot.querySelector(
            ".yume-menu-categories-screen"
        );

    const dishesScreen =
        menuRoot.querySelector(
            ".yume-dishes-screen"
        );

    const nextButton =
        menuRoot.querySelector(
            ".yume-menu-next"
        );

    const backButton =
        menuRoot.querySelector(
            ".yume-menu-back"
        );

    const categoryButtons =
        menuRoot.querySelectorAll(
            ".yume-category-item"
        );

    const dishesGrid =
        menuRoot.querySelector(
            "#yume-dishes-grid"
        );

    const selectedTitle =
        menuRoot.querySelector(
            "#yume-selected-category"
        );

    const selectedDescription =
        menuRoot.querySelector(
            "#yume-selected-description"
        );


    /* =====================================================
       OLD DISH GRID = DATA SOURCE ONLY
    ===================================================== */

    const oldDishGrid =
        document.querySelector(
            ".menu-section > .menu-grid"
        );


    if (!oldDishGrid) {

        console.warn(
            "YUME MENU: Old dish grid not found."
        );

        return;
    }


    const sourceDishes =
        Array.from(
            oldDishGrid.querySelectorAll(
                ".dish"
            )
        );


    /* =====================================================
       HIDE OLD GRID
    ===================================================== */

    oldDishGrid.style.display =
        "none";


    /* =====================================================
       INITIAL STATE
       
       LEFT CARD + CATEGORIES
       BOTH VISIBLE
    ===================================================== */

    menuRoot.classList.remove(
        "menu-dishes-open"
    );

    if (coverScreen) {
        coverScreen.style.display = "";
    }

    if (categoriesScreen) {
        categoriesScreen.style.display = "";
    }

    if (dishesScreen) {
        dishesScreen.style.display = "none";
    }


    /* =====================================================
       MENU CARD ARROW
       
       Scroll to category area.
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                if (window.innerWidth <= 800) {

                    categoriesScreen?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                } else {

                    categoriesScreen?.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }
        );

    }


    /* =====================================================
       PRICE
    ===================================================== */

    function convertToUSD(priceText) {

        const number =
            parseFloat(
                priceText
                    .replace(/[$₹,]/g, "")
            );


        if (Number.isNaN(number)) {
            return "$--";
        }


        return "$" + number;

    }


    /* =====================================================
       CREATE DISH CARD
    ===================================================== */

    function createDishCard(
        dish,
        index
    ) {

        const card =
            document.createElement(
                "article"
            );

        card.className =
            "yume-dish-card";


        /* IMAGE */

        const sourceImage =
            dish.querySelector(
                ".dish-image"
            );

        const image =
            document.createElement(
                "div"
            );

        image.className =
            "yume-dish-image";


        if (sourceImage) {

            const computed =
                window.getComputedStyle(
                    sourceImage
                );


            image.style.backgroundImage =
                computed.backgroundImage;

            image.style.backgroundPosition =
                computed.backgroundPosition;

            image.style.backgroundSize =
                computed.backgroundSize;

            image.style.backgroundRepeat =
                computed.backgroundRepeat;

        }


        /* INFO */

        const info =
            document.createElement(
                "div"
            );

        info.className =
            "yume-dish-info";


        const sourceTitle =
            dish.querySelector("h3");

        const sourceDescription =
            dish.querySelector("p");


        const number =
            document.createElement(
                "span"
            );

        number.textContent =
            String(index + 1)
                .padStart(2, "0");


        const title =
            document.createElement(
                "h3"
            );

        title.textContent =
            sourceTitle
                ? sourceTitle.textContent.trim()
                : "YUME Dish";


        const description =
            document.createElement(
                "p"
            );

        description.textContent =
            sourceDescription
                ? sourceDescription.textContent.trim()
                : "";


        info.appendChild(
            number
        );

        info.appendChild(
            title
        );

        info.appendChild(
            description
        );


        /* PRICE */

        const sourcePrice =
            dish.querySelector(
                "strong"
            );


        const price =
            document.createElement(
                "div"
            );

        price.className =
            "yume-dish-price";


        price.textContent =
            sourcePrice
                ? convertToUSD(
                    sourcePrice.textContent
                )
                : "$--";


        /* BUILD */

        card.appendChild(
            image
        );

        card.appendChild(
            info
        );

        card.appendChild(
            price
        );


        return card;

    }


    /* =====================================================
       CATEGORY INFORMATION
    ===================================================== */

    const categoryNames = {

        sushi:
            "SUSHI",

        sashimi:
            "SASHIMI",

        mains:
            "MAINS",

        ramen:
            "RAMEN",

        dessert:
            "DESSERT",

        drinks:
            "DRINKS"

    };


    const categoryDescriptions = {

        sushi:
            "TRADITIONAL CRAFT. TIMELESS FLAVOR.",

        sashimi:
            "PURE INGREDIENTS. TRUE TASTE.",

        mains:
            "BOLD CREATIONS. LASTING IMPRESSIONS.",

        ramen:
            "DEPTH IN EVERY BOWL.",

        dessert:
            "A SWEET ENDING.",

        drinks:
            "REFRESH. INDULGE. REPEAT."

    };


    /* =====================================================
       OPEN CATEGORY
    ===================================================== */

    function openCategory(
        category
    ) {

        if (!dishesGrid) {
            return;
        }


        /* CLEAR OLD DISHES */

        dishesGrid.innerHTML = "";


        /* FIND DISHES */

        const matchedDishes =
            sourceDishes.filter(
                dish =>
                    dish.dataset.category ===
                    category
            );


        /* CREATE DISHES */

        matchedDishes.forEach(
            (dish, index) => {

                dishesGrid.appendChild(
                    createDishCard(
                        dish,
                        index
                    )
                );

            }
        );


        /* EMPTY STATE */

        if (
            matchedDishes.length === 0
        ) {

            const empty =
                document.createElement(
                    "div"
                );

            empty.className =
                "yume-dish-empty";


            empty.innerHTML = `
                <span>YUME COLLECTION</span>

                <h3>Coming Soon</h3>

                <p>
                    This collection is being
                    carefully prepared.
                </p>
            `;


            dishesGrid.appendChild(
                empty
            );

        }


        /* TITLE */

        if (selectedTitle) {

            selectedTitle.textContent =
                categoryNames[category] ||
                category.toUpperCase();

        }


        /* DESCRIPTION */

        if (
            selectedDescription
        ) {

            selectedDescription.textContent =
                categoryDescriptions[
                    category
                ] || "";

        }


        /* OPEN DISH SCREEN */

        menuRoot.classList.add(
            "menu-dishes-open"
        );


        /* SCROLL */

        setTimeout(
            () => {

                dishesScreen?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            },
            80
        );

    }


    /* =====================================================
       CATEGORY BUTTONS
    ===================================================== */

    categoryButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const category =
                        button.dataset.category;


                    if (!category) {
                        return;
                    }


                    openCategory(
                        category
                    );

                }
            );

        }
    );


    /* =====================================================
       BACK TO MENU
    ===================================================== */

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                menuRoot.classList.remove(
                    "menu-dishes-open"
                );


                setTimeout(
                    () => {

                        menuRoot.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    },
                    50
                );

            }
        );

    }


    console.log(
        "YUME MENU — FINAL SYSTEM READY ✓"
    );

});
