import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";

  document.getElementsByTagName("main")[0]?.classList.add("main-active");

  // Background animation
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  // Landing main text animation (simple replacement of SplitText)
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.15,
      delay: 0.3,
    }
  );

  // Secondary text
  gsap.fromTo(
    ".landing-h2-info",
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.inOut",
      delay: 0.3,
    }
  );

  // Small text animation
  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.8,
    }
  );

  // Navbar + icons fade
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Loop text animation (simplified)
  loopText(".landing-h2-info", ".landing-h2-info-1");
  loopText(".landing-h2-1", ".landing-h2-2");
}

function loopText(selector1: string, selector2: string) {
  const el1 = document.querySelector(selector1);
  const el2 = document.querySelector(selector2);

  if (!el1 || !el2) return;

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  tl.to(el1, {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.inOut",
    delay: 3,
  })
    .fromTo(
      el2,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
      }
    )
    .to(el2, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      delay: 3,
    })
    .fromTo(
      el1,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
      }
    );
}