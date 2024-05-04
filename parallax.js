document.addEventListener("scroll", function() {
    var scrolledHeight= window.pageYOffset;
    var parallaxElements = document.querySelectorAll('parallax.js');
    parallaxElements.forEach(function(el) {
        var speed = el.dataset.rate;
        el.style.transform = 'translateY(' + scrolledHeight * speed + 'px)';
    });
});
