gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#title-pre-lycée", {y: 20, opacity: 0}, {
    scrollTrigger: {
        trigger: "#title-pre-lycée",
        start: "top 70%"
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: Power2.easeInOut()
})
gsap.fromTo("#img-presentation", {y: 20, opacity: 0}, {
    scrollTrigger: {
        trigger: "#img-presentation",
        start: "top 70%"
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: Power2.easeInOut()
})
gsap.fromTo("#presentation-left-container", {y: 20, opacity: 0}, {
    scrollTrigger: {
        trigger: "#presentation-left-container",
        start: "top 70%"
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: Power2.easeInOut()
})
gsap.fromTo("#title-enseignement", {y: 20, opacity: 0}, {
    scrollTrigger: {
        trigger: "#title-enseignement",
        start: "top 70%"
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: Power2.easeInOut()
})

gsap.fromTo(".labo-img", {y: 30, opacity: 0}, {
    scrollTrigger: {
        trigger: ".labo-img",
        start: "top 70%"
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: Power2.easeInOut()
})

gsap.fromTo("#title-résultats", {y: 30, opacity: 0}, {
    scrollTrigger: {
        trigger: "#title-résultats",
        start: "top 70%"
    },
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: Power2.easeInOut()
})

let tl_resultats = gsap.timeline({
    scrollTrigger: {
        trigger: "#resultats-container",
        start: "top 70%"
    }
});
tl_resultats.add("startt")
.fromTo(".ligne1", {width: 0}, {width: 0.9*window.innerWidth - 1, duration: 2, ease: Power2.easeOut(), stagger: 0.3}, "startt")
.fromTo(".ligne-vertical", {height: 0}, {height: 0.797*window.innerHeight, duration: 2, ease: Power2.easeOut(), stagger: 0.3}, "startt")
.to(".column-1", {opacity: 1, y: -20, duration: 0.4, ease: Power2.easeOut(), stagger: 0.3}, "startt")
.to(".column-2", {opacity: 1, y: -20, duration: 0.4, ease: Power2.easeOut(), delay: 1, stagger: 0.3}, "startt")
.to(".column-3", {opacity: 1, y: -20, duration: 0.4, ease: Power2.easeOut(), delay: 2, stagger: 0.3}, "startt")
.from(".data", {
    textContent: 0 + "%",
    duration: 3,
    ease: "power2.easeInOut()",
    snap: { textContent: 1 },
    stagger: 0.4
}, "startt");