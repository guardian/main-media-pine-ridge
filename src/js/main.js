document.getElementsByClassName('video__cta')[0].addEventListener('click', function() {
    setTimeout(function() {
        document.getElementsByTagName('body')[0].classList.add('has-clicked');
    }, 200);
    document.getElementsByClassName('video__embed')[0].setAttribute('src', 'https://www.youtube.com/embed/FoKF8H1l7NU?autoplay=1');
})