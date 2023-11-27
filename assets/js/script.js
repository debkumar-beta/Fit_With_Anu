"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const reveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
};

reveal();
addEventOnElem(window, "scroll", reveal);

// Gallery
$(document).ready(function () {
  /* Toggle Video Modal
  -----------------------------------------*/
  function toggle_video_modal() {
    // Click on video thumbnail or link
    $(".js-trigger-video-modal").on("click", function (e) {
      // prevent default behavior for a-tags, button tags, etc.
      e.preventDefault();

      // Grab the video ID from the element clicked
      var id = $(this).attr("data-youtube-id");

      // Autoplay when the modal appears
      // Note: this is intetnionally disabled on most mobile devices
      // If critical on mobile, then some alternate method is needed
      var autoplay = "?autoplay=1";

      // Don't show the 'Related Videos' view when the video ends
      var related_no = "&rel=0";

      // String the ID and param variables together
      var src = "//www.youtube.com/embed/" + id + autoplay + related_no;

      // Pass the YouTube video ID into the iframe template...
      // Set the source on the iframe to match the video ID
      $("#youtube").attr("src", src);

      // Add class to the body to visually reveal the modal
      $("body").addClass("show-video-modal noscroll");
    });

    // Close and Reset the Video Modal
    function close_video_modal() {
      event.preventDefault();

      // re-hide the video modal
      $("body").removeClass("show-video-modal noscroll");

      // reset the source attribute for the iframe template, kills the video
      $("#youtube").attr("src", "");
    }
    // if the 'close' button/element, or the overlay are clicked
    $("body").on(
      "click",
      ".close-video-modal, .video-modal .overlay",
      function (event) {
        // call the close and reset function
        close_video_modal();
      }
    );
    // if the ESC key is tapped
    $("body").keyup(function (e) {
      // ESC key maps to keycode `27`
      if (e.keyCode == 27) {
        // call the close and reset function
        close_video_modal();
      }
    });
  }
  toggle_video_modal();
});
