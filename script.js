   let searchBtn = document.querySelector('#search-btn');
 // let searchBar = document.querySelector('.search-bar-container');
// let formBtn = document.querySelector('#user-btn');
// let loginForm = document.querySelector('.login-form-container');
// let formClose = document.querySelector('#form-close');
// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');
 let videoBtn = document.querySelectorAll('.vid-btn');



setTimeout(Myfunc,4000);
function Myfunc()
{
if(confirm("Are you fully vaccinated? " + "\n" + "If not head over to COWIN website and book your slot now..."))
{   
    window.open(
        'https://www.cowin.gov.in/',
        '_blank' // <- This is what makes it open in a new window.
      );
}
}

window.onscroll= () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});




