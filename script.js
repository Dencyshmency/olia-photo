// Слайдер на главной странице

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    autoplay: true,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});


// Бургер-меню

const burgerButton = document.querySelector('.burger-button')

burgerButton.onclick = function () {

    const burgerMenu = document.querySelector('.burger-menu')
    burgerMenu.classList.toggle('burger-menu-open')

    const burgerListMenu = document.querySelector('.burger-list-menu')
    burgerListMenu.classList.toggle('burger-list-menu-open')

     if(burgerMenu.classList.contains('burger-menu-open')) {
        document.body.style.overflow = "hidden"
        // document.body.style.paddingRight = "17px"

     } else {
        document.body.style.overflow = "auto"
        // document.body.style.paddingRight = "0"
     }

}


// Переключение темы на сайте

const toggleBtn = document.querySelector(".theme-button");
const toggleBtnBurger = document.querySelector(".theme-button-burger");
try {
    toggleBtn.addEventListener("click", function() {
  let sun = document.querySelector('.sun')
  let moon = document.querySelector('.moon')

  if(document.documentElement.hasAttribute("theme")){
    document.documentElement.removeAttribute("theme");
    localStorage.removeItem('theme');
    sun.classList.remove('active-theme')
    moon.classList.add('active-theme')
    toggleBtn.classList.remove('togglae-theme')
  }
  else{
    document.documentElement.setAttribute("theme", "white");
    localStorage.setItem('theme', 'white');
    sun.classList.add('active-theme')
    moon.classList.remove('active-theme')
    toggleBtn.classList.add('togglae-theme')
  }
});
} catch {}



try {
    toggleBtnBurger.addEventListener("click", function() {
  let sun = document.querySelector('.sun-burger')
  let moon = document.querySelector('.moon-burger')

  if(document.documentElement.hasAttribute("theme")){
    document.documentElement.removeAttribute("theme");
    localStorage.removeItem('theme');
    sun.classList.remove('active-theme')
    moon.classList.add('active-theme')
    toggleBtn.classList.remove('togglae-theme')
  }
  else{
    document.documentElement.setAttribute("theme", "white");
    localStorage.setItem('theme', 'white');
    sun.classList.add('active-theme')
    moon.classList.remove('active-theme')
    toggleBtn.classList.add('togglae-theme')
  }
});
} catch {
    
}




document.addEventListener("DOMContentLoaded", () => {
  changeTheme()
})


function changeTheme() {
    let sun = document.querySelector('.sun')
    let moon = document.querySelector('.moon')
    let sunBurger = document.querySelector('.sun-burger')
    let moonBurger = document.querySelector('.moon-burger')
  if(localStorage.getItem('theme')) {
    document.documentElement.setAttribute("theme", "white");
    sun.classList.add('active-theme')
    moon.classList.remove('active-theme')
    sunBurger.classList.add('active-theme')
    moonBurger.classList.remove('active-theme')
    toggleBtn.classList.add('togglae-theme')
  }
  else {
    document.documentElement.removeAttribute("theme");
    sun.classList.remove('active-theme')
    moon.classList.add('active-theme')
    sunBurger.classList.remove('active-theme')
    moonBurger.classList.add('active-theme')
    toggleBtn.classList.remove('togglae-theme')
  }
  
}












































// Скролл страницы вверх

try {
    const scrollUpButton = document.querySelector(".wrapper-button-scroll-up");
  
    scrollUpButton.onclick = function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
  
      scrollY > 400
        ? scrollUpButton.classList.add("wrapper-button-scroll-up-open")
        : scrollUpButton.classList.remove("wrapper-button-scroll-up-open");
    });
  } catch {}



  window.addEventListener("scroll", () => {
    const scrollA = window.scrollY || document.documentElement.scrollTop;

 if(scrollA > 100) {
    document.querySelector('header').classList.add("sticky")

 } else if (scrollA < 1) {
    document.querySelector('header').classList.remove("sticky");
 }

  });


  // валидация формы

  const inputName = document.querySelector('.name-input')
  const inputEmail = document.querySelector('.email-input')
  const inputPhone = document.querySelector('.phone-input')
  const inputData = document.querySelector('.data-input')
  const inputMessage = document.querySelector('.message-input')



  let message = {
    name: '',
    email: '',
    phone: '',
    data: '',
    message: '',
  }
   
const allInput = document.querySelectorAll('input, textarea')

allInput.forEach((el) => {
  el.oninput = function () {
    if(el.value !== "") {
      el.classList.remove('error')
      let massageType = el.getAttribute('data-type')
      message[massageType] = el.value
    }
  }
})


function validateEmail(text) {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 
  return reg.test(text)
}





function sendMassge () {
  if(inputName.value === "") {
    inputName.classList.add('error')
  }
  
  if(inputPhone.value === "") {
    inputPhone.classList.add('error')
  }
  if(inputEmail.value === "") {
    inputEmail.classList.add('error')
  }
  if(inputData.value === "") {
    inputData.classList.add('error')
  }
  if(inputMessage.value === "") {
    inputMessage.classList.add('error')
  }

  if (validateEmail(inputEmail.value) === false) {
    inputEmail.classList.add('error')
  }

  console.log(message)
}


const sendButton = document.querySelector('.send-message-button')

sendButton.onclick = function () {
  sendMassge()
}

   
