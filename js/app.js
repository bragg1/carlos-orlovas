let elementsArray = document.querySelectorAll("section");

window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    elementsArray.forEach(elem => {
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 100;
        checkView(distInView, elem);
    });
}

function checkView(distance, elem) {
    if (distance < 0) {
        elem.classList.add("inView");
        elem.classList.add("fadeInLeft");
        elem.classList.remove("noView");
    } else {
        elem.classList.remove("inView");
        elem.classList.remove("fadeInLeft");
        elem.classList.add("noView");
    }
}

fadeIn();