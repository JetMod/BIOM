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
    var columnsContainer = document.querySelector('.columns__container');
    var offsetTop = columnsContainer.getBoundingClientRect().top + (columnsContainer.scrollHeight / 2);
    var scrolled = false;
    window.onscroll = function(ev) {
        if (!scrolled && (window.innerHeight + window.scrollY) >= offsetTop) {
            scrolled = true;

            columnsContainer.classList.add('columns__container_anim_start');
        }
    };
});

window.addEventListener('load', function() {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".big-slider__slide");

    // Function to show a specific item
    function showItem(index) {
        items.forEach((item, idx) => {
        item.classList.remove("active");
        if (idx === index) {
            item.classList.add("active");
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

window.addEventListener('load', function() {
    var allId = "all";
    var flatsWrappers = document.querySelectorAll('.real__flats');
    var flats = {};
    var categories = {};
    var header = document.querySelector('.real__header');

    document.querySelectorAll('.real__category').forEach(category => {
        categories[category.dataset.id] = category;
    });

    document.querySelectorAll('.real__flat').forEach(flat => {
        flats[flat.dataset.id] = flat;
    });

    Object.keys(flats).forEach(flatKey => {
        flats[flatKey]
            .querySelector('.real__flat-mini .button')
            .addEventListener('click', () => activateFlat(flats[flatKey].dataset.id));     
    })

    Object.keys(categories).forEach(categoryKey => {
        categories[categoryKey]
            .addEventListener('click', () => {
                var id = categories[categoryKey].dataset.id;
                resetFlats();

                if (id !== allId) {
                    activateFlat(id);
                }
            });
    })

    function resetFlats() {
        Object.keys(categories).forEach(categoryKey => {
            categories[categoryKey].classList.remove('real__category_active');
        });
        categories[allId].classList.add('real__category_active');

        Object.keys(flats).forEach(elKey => {
            flats[elKey].classList.remove('real__flat_active');
            flats[elKey].classList.remove('real__flat_disable');
        });

        flatsWrappers.forEach(wrapper => {
            wrapper.classList.remove('real__flats_disable');
        });
    }    

    function activateFlat(id) {
        Object.keys(categories).forEach(categoryKey => {
            categories[categoryKey].classList.remove('real__category_active');
        });
        categories[id].classList.add('real__category_active');

        Object.keys(flats).forEach(elKey => {
            if(id == elKey) return;

            flats[elKey].classList.remove('real__flat_active');
            flats[elKey].classList.add('real__flat_disable');
        });

        flatsWrappers.forEach(wrapper => {
            if (wrapper != flats[id].parentNode) {
                wrapper.classList.add('real__flats_disable');
            }
        });

        flats[id].classList.add('real__flat_active');
        header.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }    
});