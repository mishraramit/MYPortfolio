const navSlide = () => {
  const toggleBtn = document.querySelector("#toggleBtn");
  const menu = document.querySelector(".menu");
  const menuItem = document.querySelectorAll(".menu li");

  //
  // var el = document.getElementById('toggleBtn');
  if(toggleBtn){
    // el.addEventListener('click', swapper, false);
    //
    toggleBtn.addEventListener("click", () => {
      // Toggle Menu
      menu.classList.toggle("nav-active");
      
      // Animate Links
      menuItem.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.3}s`;
          }
        });
        
        // Burger Button Animation
        toggleBtn.classList.toggle("toggler");
      });
    }
};

navSlide();