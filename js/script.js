

   let hamburgerMenu = document.querySelector('#hamburger_menu_icon');
   let navigationBar = document.querySelector('.navigation_bar');

   hamburgerMenu.onclick = () => {
     hamburgerMenu.classList.toggle('bx-x');
     navigationBar.classList.toggle('open');
   }
