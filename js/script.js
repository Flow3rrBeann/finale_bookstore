window.addEventListener('load', () => {
  const form = document.getElementById('contactForm');
  const passwordInput = document.getElementById('password');
  const showPasswordCheckbox = document.getElementById('showPassword');

  if (showPasswordCheckbox && passwordInput) {
    showPasswordCheckbox.addEventListener('change', () => {
      passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const password = form.password.value.trim();
      const message = form.message.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?\d{10,15}$/;

      if (!name || !email || !phone || !password || !message) {
        alert('გთხოვთ, შეავსეთ ყველა ველი!');
        return;
      }

      if (!emailRegex.test(email)) {
        alert('გთხოვთ, მიუთითეთ ვალიდური მეილი!');
        return;
      }

      if (!phoneRegex.test(phone)) {
        alert('გთხოვთ, მიუთითეთ ვალიდური ტელეფონის ნომერი!');
        return;
      }

      alert('ფორმა წარმატებით გაიგზავნა!');
      form.reset();
    });
  }
});





// ჰედერის ფერის შეცვლა
window.addEventListener('scroll', () => {
  const header = document.getElementById('mainHeader');
  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// ბურგერი
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.navmenu');

if (menuIcon && navMenu) {
  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuIcon.classList.toggle('fa-times');
  });

  const navLinks = navMenu.querySelectorAll('ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuIcon.classList.remove('fa-times');
    });
  });
} else {
  console.warn("Menu icon or navigation menu not found.");
}


// -------- სერვერიდან ინფორმაციის მიღება 
async function getFakeUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("მიღებული მონაცემები:", data);
  } catch (error) {
    console.error("შეცდომა მონაცემების მიღებისას:", error);
  }
}

getFakeUsers();


//ქუქი
const cookieNotice = document.getElementById('cookieNotice');
const acceptCookiesBtn = document.getElementById('acceptCookies');

if (!localStorage.getItem('cookiesAccepted')) {
cookieNotice.classList.remove('hidden');
}

acceptCookiesBtn.addEventListener('click', () => {
localStorage.setItem('cookiesAccepted', 'true');
cookieNotice.classList.add('hidden');
});
