const designItems = [
  {
    image: "image/design1.jpg",
    title: "Certificate Design",
    text: "A clean appreciation certificate design created for IEEE Student Branch activities."
  },
  {
    image: "image/design2.jpg",
    title: "Flyer Design",
    text: "A social media flyer designed with clear visual hierarchy and event-focused communication."
  },
  {
    image: "image/design3.jpg",
    title: "Event Ticket Design",
    text: "A professional event ticket design created with branding, layout balance, and readable details."
  },
  {
    image: "image/design4.jpg",
    title: "CV Design",
    text: "A modern CV layout designed with clean typography and professional structure."
  },
  {
    image: "image/design5.jpg",
    title: "Digital Media Design",
    text: "A creative digital design prepared for online promotion and student branch activities."
  }
];

let designIndex = 0;

const miniDesignImage = document.getElementById("miniDesignImage");
const miniDesignTitle = document.getElementById("miniDesignTitle");
const miniDesignText = document.getElementById("miniDesignText");

function changeDesignWork() {
  if (!miniDesignImage) return;

  miniDesignImage.classList.add("fade");

  setTimeout(() => {
    designIndex = (designIndex + 1) % designItems.length;

    miniDesignImage.src = designItems[designIndex].image;
    miniDesignTitle.textContent = designItems[designIndex].title;
    miniDesignText.textContent = designItems[designIndex].text;

    miniDesignImage.classList.remove("fade");
  }, 500);
}

setInterval(changeDesignWork, 2500);
