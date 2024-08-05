window.addEventListener('load', function() {
    document.querySelectorAll('.slider__card').forEach(function(card) {
        card.addEventListener('mouseover', function() {
            document.querySelectorAll('.slider__card.active').forEach(function(el) {
                el.classList.remove('active');
            });

            if (!this.classList.contains('active')) {
                this.classList.add("active");
            }
        });
    });
});

