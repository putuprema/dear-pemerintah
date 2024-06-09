window.addEventListener("load", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelector("main").style.opacity = 1;

  const introTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=4000px"
    }
  });

  introTimeline.to("#dear-govt", {
    opacity: 0,
    scale: 1.2
  });
  introTimeline.from("#dear-govt-1", {
    opacity: 0,
    scale: 0.9
  });
  introTimeline.to("#dear-govt-1", {
    opacity: 0,
    scale: 1.2
  });
  introTimeline.from(
    "#dear-container",
    {
      opacity: 0,
      y: 60
    },
    "<"
  );
  introTimeline.from("#dear-govt-2", {
    width: 0
  });
  introTimeline.from("#dear-govt-3", {
    width: 0
  });
  introTimeline.to("#dear-container", {
    opacity: 0,
    y: -100
  });
  introTimeline.from("#dear-govt-ending", {
    opacity: 0,
    y: 60
  });

  const dangerousLawsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#dangerous-law",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=4000px"
    }
  });
  dangerousLawsTimeline.from("#dangerous-law .law-container:nth-child(1)", {
    opacity: 0,
    y: 60
  });
  dangerousLawsTimeline.from("#dangerous-law .law-container:nth-child(2)", {
    opacity: 0,
    y: 60
  });
  dangerousLawsTimeline.from("#dangerous-law .law-container:nth-child(3)", {
    opacity: 0,
    y: 60
  });
  dangerousLawsTimeline.from("#dangerous-law .law-container:nth-child(4)", {
    opacity: 0,
    y: 60
  });

  const lawDetailsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#law-detail",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=4000px"
    }
  });
  lawDetailsTimeline.from("#law-detail .law-container", {
    opacity: 0
  });
  lawDetailsTimeline.from(
    "#details-ruu-penyiaran",
    {
      opacity: 0,
      y: 40
    },
    "0.1"
  );
  lawDetailsTimeline.to("#details-ruu-penyiaran", {
    opacity: 0,
    y: -40
  });
  lawDetailsTimeline.from("#details-ruu-tni", {
    opacity: 0,
    y: 40
  });
  lawDetailsTimeline.to(
    "#img-ruu-penyiaran",
    {
      opacity: 0
    },
    ">-0.5"
  );
  lawDetailsTimeline.to(
    "#title-ruu-penyiaran",
    {
      opacity: 0
    },
    ">-0.8"
  );
  lawDetailsTimeline.from(
    "#title-ruu-tni",
    {
      opacity: 0
    },
    ">0"
  );

  lawDetailsTimeline.to("#details-ruu-tni", {
    opacity: 0,
    y: -40
  });
  lawDetailsTimeline.from("#details-ruu-polri", {
    opacity: 0,
    y: 40
  });
  lawDetailsTimeline.to(
    "#img-ruu-tni",
    {
      opacity: 0
    },
    ">-0.5"
  );
  lawDetailsTimeline.to(
    "#title-ruu-tni",
    {
      opacity: 0
    },
    ">-0.8"
  );
  lawDetailsTimeline.from(
    "#title-ruu-polri",
    {
      opacity: 0
    },
    ">0"
  );

  lawDetailsTimeline.to("#details-ruu-polri", {
    opacity: 0,
    y: -40
  });
  lawDetailsTimeline.from("#details-pp-tapera", {
    opacity: 0,
    y: 40
  });
  lawDetailsTimeline.to(
    "#img-ruu-polri",
    {
      opacity: 0
    },
    ">-0.5"
  );
  lawDetailsTimeline.to(
    "#title-ruu-polri",
    {
      opacity: 0
    },
    ">-0.8"
  );
  lawDetailsTimeline.from(
    "#title-pp-tapera",
    {
      opacity: 0
    },
    ">0"
  );

  const closingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#closing-statement",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=4000px"
    }
  });
  closingTimeline.from("#closing-1", {
    width: 0
  });
  closingTimeline.from("#closing-2", {
    width: 0
  });
  closingTimeline.from("#closing-3", {
    width: 0
  });
  closingTimeline.from("#closing-4", {
    width: 0
  });
  closingTimeline.from("#closing-5", {
    width: 0
  });
  closingTimeline.from("#closing-6", {
    width: 0
  });
});
