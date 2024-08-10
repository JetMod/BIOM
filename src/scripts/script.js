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


window.addEventListener('load', function() {
    const langBtn = document.querySelector(".header__button_language");

    langBtn.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});

window.addEventListener('load', function() {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".big-slider__slide");
    let dotsContainer = document.querySelector(".dots");

    // Insert dots into the DOM
    items.forEach((_, index) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    let dots = document.querySelectorAll(".dot");

    // Function to show a specific item
    function showItem(index) {
        items.forEach((item, idx) => {
        item.classList.remove("active");
        dots[idx].classList.remove("active");
        if (idx === index) {
            item.classList.add("active");
            dots[idx].classList.add("active");
        }
        });
    }

    // Event listeners for buttons
    document.querySelector(".prev").addEventListener("click", () => {
        let index = [...items].findIndex((item) =>
        item.classList.contains("active")
        );
        showItem((index - 1 + items.length) % items.length);
    });

    document.querySelector(".next").addEventListener("click", () => {
        let index = [...items].findIndex((item) =>
        item.classList.contains("active")
        );
        showItem((index + 1) % items.length);
    });

    // Event listeners for dots
    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            let index = parseInt(dot.dataset.index);
            showItem(index);
        });
    });
});



window.addEventListener('load', function() {
    const investmentButtons = document.querySelectorAll('.investment__button');

    investmentButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.previousElementSibling.classList.toggle('show');

        if (button.previousElementSibling.classList.contains('show')) {
            button.innerHTML = 'Show Less <img src="./src/assets/vectors/investment__img_close.svg" class="investment__img_open">';
        } else {
            button.innerHTML = 'Show More <img src="./src/assets/vectors/investment__img_open.svg" class="investment__img_open">';
        }
    });
    });
});