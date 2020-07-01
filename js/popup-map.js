var map = document.querySelector(".popup-map");
var mapLink = document.querySelector(".contacts__map-link");
var mapCloseButton = document.querySelector(".popup-map__close-button");

// Отображеие карты

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal--show");
});

// Закрытие формы обратной связи

mapCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal--show");
});

// Закрытие формы по Esc

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains("modal--show")) {
      evt.preventDefault();
      map.classList.remove("modal--show");
    }
  }
});
