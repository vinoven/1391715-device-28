var feedback = document.querySelector(".feedback");
var feedbackForm = document.querySelector(".feedback__form");
var feedbackLink = document.querySelector(".feedback__link");
var feedbackCloseButton = document.querySelector(".feedback__close-form");

var feedbackName = document.querySelector(".feedback-name");
var feedbackEmail = document.querySelector(".feedback-email");
var feedbackText = document.querySelector(".feedback-text");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

// Проверка поддержки localStorage

try {
  storageName = localStorage.getItem("name", feedbackName);
  storageEmail = localStorage.getItem("email", feedbackEmail);
} catch (err) {
  isStorageSupport = false;
}

// Отображение формы обратной связи

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("modal--show");

  if (storageName && !storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.focus();
  } else {
    if (!storageName && storageEmail) {
      feedbackEmail.value = storageEmail;
    } else {
      if (storageName && storageEmail) {
        feedbackName.value = storageName;
        feedbackEmail.value = storageEmail;
        feedbackText.focus();
      }
    }
  }
});

// Закрытие формы обратной связи

feedbackCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("modal--show");
  feedback.classList.remove("modal--error");
});

// Закрытие формы по Esc

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedback.classList.contains("modal--show")) {
      evt.preventDefault();
      feedback.classList.remove("modal--show");
      feedback.classList.remove("modal--error");
    }
  }
});

// Валидация формы

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    feedback.classList.remove("modal--error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("modal--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});
