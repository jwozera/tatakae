window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    toggleActions: "play complete reverse repeat"
});


gsap.fromTo(".overlay",
    {
        y: 200
    },
    {

        y: 0,
        duration: 1,
        scale: 0.8,
        transformOrigin: "right bottom",
        scrollTrigger: {
            trigger: "#section-intro",
            pin: true,
            start: "top top",
            scrub: true,
            // markers: {
            //     startColor: "#a240cc",
            //     endColor: "#348ed8",
            //     fontSize: "12px"
            // }

        }

    });


gsap.to(".bg",

    {
        duration: 2,
        scale: 1.5,
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            scrub: true,
        }


    });

gsap.fromTo(".text-box",

    {
        opacity: 0.1,
        y: -200,
        textShadow: "#fff 0px 0px",
    },
    {
        opacity: 1,
        y: 0,
        textShadow: "#000 3px 3px",
        duration: 3,
        scrollTrigger: {
            trigger: ".text-box",
            start: "200 100",
            end: "+=1000",
            scrub: false,
            toggleActions: "play complete resume"
        },

    });



// thats for the scroll snap between sections
const sections = gsap.utils.toArray('section')

// ScrollTrigger.create({
//     trigger: '.first',
//     start: 'top top',
//     endTrigger: '.last',
//     end: 'bottom bottom',
//     pin: true,
//     markers: false,
//     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//     snap: {
//         snapTo: [0.216, 0.418, 0.600, , 0.806, 0.931],
//         duration: { min: 0.25, max: 2.75 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//         delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
//         ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
//     }
// });

let boxes = gsap.utils.toArray("section"),
    container = document.querySelector("body"),
    text = document.querySelector("#pin"),
    padding = gsap.getProperty(container, "paddingTop", "px"),
    // create a ScrollTrigger for each box that we can use to calculate snapping (we'll look at the "start" of each in the onRefresh)
    snapTriggers = boxes.map(box => ScrollTrigger.create({
        trigger: box,
        start: "top " + padding + "px"
    })),
    snaps = []; // where we'll store the progress value for each box's ScrollTrigger (start)

ScrollTrigger.create({
    trigger: '#container',
    markers: false,
    pin: '#pin',
    pinSpacing: false,
    start: "top top",
    end: () => "+=" + (boxes[boxes.length - 1].getBoundingClientRect().top),
    onRefresh: self => {
        // re-populate the "snaps" Array with the progress values for where each box hits the target spot.
        let distance = self.end - self.start;
        snapTriggers.forEach((trigger, i) => snaps[i] = ((trigger.start - self.start) / distance) - 0.0185);
    },
    snap: snaps
});

let burger = document.getElementById("burger");
let menu = document.getElementById("menu-nav");
let navToIntro = document.getElementById("nav-to-intro");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("show");
})

navToIntro.addEventListener("click", () => {
    gsap.to(window, {
        scrollTo: {
            y: 0,
            autoKill: true
        },
        duration: 1
    });
})
