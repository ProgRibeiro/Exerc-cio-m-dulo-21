function uianimated() {
    var uianimateds = document.querySelectorAll('.uianimated');

    for (var i = 0; i < uianimateds.length; i++) {
        var windowheight = window.innerHeight;
        var uianimatedtop = uianimateds[i].getBoundingClientRect().top;
        var uianimatedpoint = 40;

        if (uianimatedtop < windowheight - uianimatedpoint) {
            uianimateds[i].classList.add('active');
        } else {
            uianimateds[i].classList.remove('active');
        }
    }
}

function onPageload() {
    uianimated();
    window.addEventListener('scroll', uianimated);
}

window.addEventListener('load', onPageload);