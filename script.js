let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.addEventListener('scroll', function() {
    const box = document.querySelector('.box');
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Adjust these values as needed
    const boxHeight = box.offsetHeight;
    const vanishPoint = windowHeight - boxHeight;

    // Move up and fade out effect
    if (scrollPosition <= vanishPoint) {
        box.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Adjust the multiplier for speed
        box.style.opacity = 1; // Fully visible
    } else {
        box.style.transform = `translateY(${vanishPoint * 0.5}px)`;
        box.style.opacity = 1 - ((scrollPosition - vanishPoint) / (boxHeight)); // Fade out effect
    }
});

