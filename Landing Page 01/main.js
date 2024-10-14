var tl = gsap.timeline({
    repeat: -1
});

tl
.to(".imagecontainer", {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger: 2
}, 'animate')
.to(".text h1", {
    ease: Expo.easeInOut,
    duration: 2,
    top: 0,
    stagger: 2
}, 'animate')
.to(".text h1", {
    ease: Expo.easeInOut,
    delay: 2,
    top: "-100%",
    stagger: 2
}, 'animate')
