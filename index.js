// creating onload event
window.onload = function () {
  gsap.from(".hero-img", {
    y: 120,
    duration: 2,
    ease: "power3.out",
    opacity: 0,
    stagger: 0.3,
  });

  gsap.from(".cta", {
    delay: 0.2,
    duration: 2,
    ease: "power3",
    opacity: 0,
    stagger: 0.3,
  });
  gsap.from(".logo",{
      delay: 0.1,
        duration: 0.3,
        y: -50,
        ease: "power3"
  })
};

