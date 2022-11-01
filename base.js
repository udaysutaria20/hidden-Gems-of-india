$(function(){
   $("#header").load("header.html"); 
  $("#footer").load("footer.html");
});

window.addEventListener('load',(event) => {
  event.preventDefault();
  
  let searchBtn = document.querySelector('#search-btn');
  let searchBar = document.querySelector('.search-bar-container');
  let formBtn = document.querySelector('#user-btn');
  let loginForm = document.querySelector('.login-form-container');
  let formClose = document.querySelector('#form-close');
  let menu = document.querySelector('#menu-bar');
  let navbar = document.querySelector('.navbar');
  let videoBtn = document.querySelectorAll('.vid-btn');
  
  formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
  });
  
  formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
  });
  
  
  searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
  });
  
  menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
  
  });
  
  
  
  
  
  
  