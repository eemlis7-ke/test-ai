document.addEventListener("DOMContentLoaded", function () {
    const heroButton = document.getElementById("hero-button");
    const termsOpen = document.getElementById("terms-open");
    const termsClose = document.getElementById("terms-close");
    const privacyOpen = document.getElementById("privacy-open");
    const privacyClose = document.getElementById("privacy-close");
    const termsModal = document.getElementById("terms-modal");
    const privacyModal = document.getElementById("privacy-modal");
  
    heroButton.addEventListener("click", function () {
      alert("ボタンがクリックされました");
    });
  
    termsOpen.addEventListener("click", () => {
      termsModal.style.display = "block";
      document.body.classList.add("modal-open");
      document.body.style.top = `-${window.scrollY}px`;
    });
  
    termsClose.addEventListener("click", () => {
      const scrollY = document.body.style.top;
      termsModal.style.display = "none";
      document.body.classList.remove("modal-open");
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    });
  
    privacyOpen.addEventListener("click", () => {
      privacyModal.style.display = "block";
      document.body.classList.add("modal-open");
      document.body.style.top = `-${window.scrollY}px`;
    });
  
    privacyClose.addEventListener("click", () => {
      const scrollY = document.body.style.top;
      privacyModal.style.display = "none";
      document.body.classList.remove("modal-open");
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    });
  
    const testimonialButtons = document.querySelectorAll(".testimonial-button");
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    let currentCard = 0;
  
    testimonialButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        testimonialCards[currentCard].style.display = "none";
        currentCard = index;
        testimonialCards[currentCard].style.display = "block";
      });
    });
  
    const nextStepButtons = document.querySelectorAll(".next-step");
    const tutorialSteps = document.querySelectorAll(".tutorial-step");
    let currentStep = 0;
  
    nextStepButtons.forEach((button) => {
      button.addEventListener("click", () => {
        tutorialSteps[currentStep].style.display = "none";
        currentStep = (currentStep + 1) % tutorialSteps.length;
        tutorialSteps[currentStep].style.display = "block";
      });
    });
  });
  