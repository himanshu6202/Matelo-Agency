document.addEventListener("DOMContentLoaded", () => {
  // Locomotive Scroll Initialization
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".scroll-container"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".scroll-container", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".scroll-container").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  // GSAP Animations
  gsap.from("#header h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#header h4", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from("#p2-content h2, .contact-details, .contact-form", {
    scrollTrigger: {
      trigger: "#p2-content",
      scroller: ".scroll-container",
      start: "top 90%",
      end: "top 60%",
      scrub: true,
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });

  // Update Date and Time
  function updateDateTime() {
    const now = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const dateString = now.toLocaleDateString(undefined, options);
    const timeString = now.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const datetimeElement = document.getElementById("datetime");
    if (datetimeElement) {
      datetimeElement.textContent = `${dateString} | ${timeString}`;
    } else {
      console.error("Element with ID 'datetime' not found!");
    }
  }

  // Call updateDateTime every second to refresh the time
  setInterval(updateDateTime, 1000);
  updateDateTime(); // Initialize immediately
});



function scrollTrigger(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

scrollTrigger()

function cursorEffect() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursorEffect()


function page2Animation(){
  gsap.from("#page2-content", {
    y :120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      // markers: true,
      scrub: 2
    }
  })
}

page2Animation()

function page1Loader(){
  var tl = gsap.timeline()

tl.from("#loader h3",{
  x:40,
  opacity: 0,
  duration: 1,
  stagger: 0.1
})

tl.to("#loader h3",{
  opacity: 0,
  x: -10,
  duration: 1,
  stagger:  0.1
})

tl.to("#loader",{
  opacity:0
})

tl.from("#page1-content h1 span",{
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  delay: -0.5
})

tl.to("#loader",{
  display: "none"
})
}

page1Loader()

function page3Animation(){
  gsap.from("#page3-top", {
    y :120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 50%",
      end: "top 58%",
      // markers: true,
      scrub: 2
    }
  })
}

page3Animation()

function page4Animation(){
  gsap.from("#page4-top h1", {
    x : -120,
    stagger: 0.2,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 46%",
        end: "top 47%",
        // markers: true,
        scrub: 10
      }
  
  })
}

page4Animation()

function page4Animation2(){
  gsap.from("#design h1", {
    x : 120,
    stagger: 0.2,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "left 46%",
        end: "left 100%",
        // markers: true,
        scrub: 10
      }
  
  })
}

page4Animation2()


// Contact page js :

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scroll-container"),
  smooth: true
});

// Update ScrollTrigger based on Locomotive Scroll updates
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scroll-container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector(".scroll-container").style.transform ? "transform" : "fixed"
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact-form",
    scroller: ".scroll-container",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: true
  },
  opacity: 0,
  y: 50,
  duration: 1
});

// Refresh ScrollTrigger after Locomotive Scroll initialization
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


