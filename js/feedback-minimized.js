﻿var feedback=document.querySelector(".feedback"),feedbackForm=document.querySelector(".feedback__form"),feedbackLink=document.querySelector(".feedback__link"),feedbackCloseButton=document.querySelector(".feedback__close-form"),feedbackName=document.querySelector(".feedback-name"),feedbackEmail=document.querySelector(".feedback-email"),feedbackText=document.querySelector(".feedback-text"),isStorageSupport=!0,storageName="",storageEmail="";try{storageName=localStorage.getItem("name",feedbackName),storageEmail=localStorage.getItem("email",feedbackEmail)}catch(e){isStorageSupport=!1}feedbackLink.addEventListener("click",function(e){e.preventDefault(),feedback.classList.add("modal--show"),storageName&&!storageEmail?(feedbackName.value=storageName,feedbackEmail.focus()):!storageName&&storageEmail?feedbackEmail.value=storageEmail:storageName&&storageEmail&&(feedbackName.value=storageName,feedbackEmail.value=storageEmail,feedbackText.focus())}),feedbackCloseButton.addEventListener("click",function(e){e.preventDefault(),feedback.classList.remove("modal--show"),feedback.classList.remove("modal--error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&feedback.classList.contains("modal--show")&&(e.preventDefault(),feedback.classList.remove("modal--show"),feedback.classList.remove("modal--error"))}),feedbackForm.addEventListener("submit",function(e){feedbackName.value&&feedbackEmail.value&&feedbackText.value?isStorageSupport&&(localStorage.setItem("name",feedbackName.value),localStorage.setItem("email",feedbackEmail.value)):(e.preventDefault(),feedback.classList.remove("modal--error"),feedback.offsetWidth=feedback.offsetWidth,feedback.classList.add("modal--error"))});