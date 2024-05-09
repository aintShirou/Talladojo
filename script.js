document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".auto-type", {
    strings: ["Student", "Gamer", "Programmer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });

  var tabLinks = document.querySelectorAll(".tab-links");
  var tabContents = document.querySelectorAll(".tab-contents");

  
  document.body.addEventListener("click", function(event) {
    var target = event.target;

   
    if (target.classList.contains("tab-links")) {
      var tabName = target.getAttribute("data-tabname");

      tabLinks.forEach(function(link) {
        link.classList.remove("active-link");
      });

      tabContents.forEach(function(content) {
        content.classList.remove("active-tab");
      });

      target.classList.add("active-link");
      document.getElementById(tabName).classList.add("active-tab");
    }
  });

    const slides = document.querySelectorAll('.about1 .slide');
    let currentSlide = 0;

    function showSlide() {
    slides.forEach(slide => {
      slide.style.display = 'none';
    });

    slides[currentSlide].style.display = 'block';
    currentSlide = (currentSlide + 1) % slides.length;

    setTimeout(showSlide, 3000);
    }

    showSlide();


    var typed = new Typed(".auto-type2", {
      strings: ["Unlock the Power of Gaming!"],
      typeSpeed: 50,     
      backSpeed: 30,     
      loop: true
    });

    var homeBar = document.getElementById("home-bar");
    var homeSection = document.getElementById("home");
  
      homeBar.addEventListener("click", function(event) {
      event.preventDefault();
      homeSection.scrollIntoView({ behavior: "smooth" });
    });

      var aboutBar = document.getElementById("about-bar");
      var aboutSection = document.getElementById("aboutme");
  
      aboutBar.addEventListener("click", function(event) {
      event.preventDefault();
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    var learnMoreButton = document.getElementById("learn-more-button");
    var aboutMeSection = document.getElementById("aboutme");
  
    learnMoreButton.addEventListener("click", function(event) {
      event.preventDefault();
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    });


    var gameBar = document.getElementById("game-bar");
    var gameSection = document.getElementById("games");
  
      gameBar.addEventListener("click", function(event) {
      event.preventDefault();
      gameSection.scrollIntoView({ behavior: "smooth" });
    });

    var serviceBar = document.getElementById("service-bar");
    var serviceSection = document.getElementById("services");
  
      serviceBar.addEventListener("click", function(event) {
      event.preventDefault();
      serviceSection.scrollIntoView({ behavior: "smooth" });
    });

    var contactBar = document.getElementById("contact-bar");
    var contactSection = document.getElementById("contact");
  
      contactBar.addEventListener("click", function(event) {
      event.preventDefault();
      contactSection.scrollIntoView({ behavior: "smooth" });
    });

  });