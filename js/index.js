//burger
const iconBurger = document.querySelector(".burger__icon");
if (iconBurger){
  const bodyBurger = document.querySelector(".burger__body");
  iconBurger.addEventListener("click", function (e) {
    iconBurger.classList.toggle("_active");
    bodyBurger.classList.toggle("_active");

  });
}

//header bg
const head = document.querySelector(".header");
window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  console.log(scrollDistance)
  if (scrollDistance >= 1) {
    head.classList.add("head-bg")
  } else {
    head.classList.remove("head-bg")
  }
})

// slider
const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 449,
    spaceBetween: 30,
  },

  grabCursor: true,

  mousewheel: {
    sensitivity: 1,
  },

  slidesPerView: 3,

  freeMode: true,

  speed: 700,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    765:{
      slidesPerView: 1.5,
    },
    900: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.2,
    },
    1364: {
      slidesPerView: 3,
    }
  }
});

//map
var map = L.map("map", {zoomControl: false, scrollWheelZoom: false}).setView([48.466558349882405, 135.068798661232], 17);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var popup = L.popup({className:'popup-styles'})
    .setContent('<div class="popupcontent"><div class="popup-number"><p style="margin: 0;">+7 (4212) 464-250</p></div><div class="popup-address"><p style="margin: 10px 0px 20px;">Хабаровск, БЦ «Преображенский» 680000, Тургенева, 26а, оф. 404</p></div><div class="popup-mail"><p>info@da-development.com</p></div></div>')

var myIcon = L.icon({
  iconUrl: 'src/mapLogo.svg',
  iconSize:     [90, 90], // size of the icon
  iconAnchor:   [30, 90], // point of the icon which will correspond to marker's location
  popupAnchor:  [237, 85] // point from which the popup should open relative to the iconAnchor
});

L.marker([48.466558349882405, 135.068798661232], {icon: myIcon}).addTo(map).bindPopup(popup).openPopup();