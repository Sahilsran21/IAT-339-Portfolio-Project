

   let hamburgerMenu = document.querySelector('#hamburger_menu_icon');
   let navigationBar = document.querySelector('.navigation_bar');

   hamburgerMenu.onclick = () => {
     hamburgerMenu.classList.toggle('bx-x');
     navigationBar.classList.toggle('open');
   }



   const cartButton=document.querySelector(".form_button");
   const alertBox=document.querySelector(".alert_box");
   const closeButton=document.querySelector(".close_alert_button")
   let timer;



   cartButton.addEventListener("click",function () {
        showAlertBox();
   })

   closeButton.addEventListener("click",function () {
        hideAlertBox();
        clearTimeout(timer);
   })

   function showAlertBox(){
      alertBox.classList.remove("hide");
      alertBox.classList.add("show");
      // hide animation onload

      if(alertBox.classList.contains("hidden")){
          alertBox.classList.remove("hidden");
      }
      timer=setTimeout(function(){
          hideAlertBox();
      },5000)
   }

   function hideAlertBox(){
     alertBox.classList.remove("show");
      alertBox.classList.add("hide");
   }
