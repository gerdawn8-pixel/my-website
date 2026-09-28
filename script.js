// ==========================================
// MIDTERM PORTFOLIO
// ==========================================


// ELEMENTS

const settingsBtn =
    document.getElementById("settingsBtn");

const settingsOverlay =
    document.getElementById("settingsOverlay");

const closeSettings =
    document.getElementById("closeSettings");

const darkMode =
    document.getElementById("darkMode");

const animations =
    document.getElementById("animations");

const compactMode =
    document.getElementById("compactMode");

const oneBox =
    document.getElementById("oneBox");

const resetSettings =
    document.getElementById("resetSettings");

const aboutBtn =
    document.getElementById("aboutBtn");

const projectsBtn =
    document.getElementById("projectsBtn");

const contactBtn =
    document.getElementById("contactBtn");

const infoBoxes =
    document.querySelectorAll(".info-box");

const themeButtons =
    document.querySelectorAll(".theme-option");


// ==========================================
// SETTINGS PANEL
// ==========================================

settingsBtn.addEventListener("click", function () {

    settingsOverlay.classList.add("show");

});


closeSettings.addEventListener("click", function () {

    settingsOverlay.classList.remove("show");

});


settingsOverlay.addEventListener("click", function(event) {

    if (event.target === settingsOverlay) {

        settingsOverlay.classList.remove("show");

    }

});


// ==========================================
// ESC KEY
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        settingsOverlay.classList.remove("show");

    }

});


// ==========================================
// EXPANDABLE BOXES
// ==========================================

infoBoxes.forEach(function(box) {

    const header =
        box.querySelector(".box-header");

    header.addEventListener("click", function() {

        if (oneBox.checked) {

            infoBoxes.forEach(function(otherBox) {

                if (otherBox !== box) {

                    otherBox.classList.remove("active");

                }

            });

        }

        box.classList.toggle("active");

    });

});


// ==========================================
// ABOUT ME
// ==========================================

aboutBtn.addEventListener("click", function() {

    const personalBox = infoBoxes[0];

    personalBox.classList.add("active");

    personalBox.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

});


// ==========================================
// PROJECTS
// ==========================================

projectsBtn.addEventListener("click", function() {

    document
        .getElementById("projects")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

});


// ==========================================
// CONTACT BUTTON
// ==========================================

contactBtn.addEventListener("click", function() {

    const contactBox = infoBoxes[5];

    contactBox.classList.add("active");

    contactBox.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

});


// ==========================================
// DARK MODE
// ==========================================

darkMode.addEventListener("change", function() {

    if (darkMode.checked) {

        document.body.classList.remove("light");

    } else {

        document.body.classList.add("light");

    }

});


// ==========================================
// ANIMATIONS
// ==========================================

animations.addEventListener("change", function() {

    if (animations.checked) {

        document.body.classList.add("animations");

        document.body.classList.remove(
            "no-animation"
        );

    } else {

        document.body.classList.remove(
            "animations"
        );

        document.body.classList.add(
            "no-animation"
        );

    }

});


// ==========================================
// COMPACT MODE
// ==========================================

compactMode.addEventListener("change", function() {

    if (compactMode.checked) {

        document.body.classList.add("compact");

    } else {

        document.body.classList.remove("compact");

    }

});


// ==========================================
// ONE BOX MODE
// ==========================================

oneBox.addEventListener("change", function() {

    if (oneBox.checked) {

        const openBoxes =
            document.querySelectorAll(
                ".info-box.active"
            );

        openBoxes.forEach(function(box, index) {

            if (index > 0) {

                box.classList.remove("active");

            }

        });

    }

});


// ==========================================
// COLOR THEMES
// ==========================================

themeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const theme =
            button.dataset.theme;

        document.body.dataset.theme =
            theme;

        themeButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});


// ==========================================
// RESET EVERYTHING
// ==========================================

resetSettings.addEventListener("click", function() {

    // Dark mode

    darkMode.checked = true;

    document.body.classList.remove("light");


    // Animations

    animations.checked = true;

    document.body.classList.add("animations");

    document.body.classList.remove(
        "no-animation"
    );


    // Compact mode

    compactMode.checked = false;

    document.body.classList.remove("compact");


    // One box

    oneBox.checked = false;


    // Theme

    document.body.dataset.theme =
        "purple";


    themeButtons.forEach(function(button) {

        button.classList.remove("active");

    });

    document
        .querySelector('[data-theme="purple"]')
        .classList.add("active");

});


// ==========================================
// DEFAULT SETTINGS
// ==========================================

document.body.classList.add("animations");

document.body.dataset.theme =
    "purple";

document
    .querySelector('[data-theme="purple"]')
    .classList.add("active");
