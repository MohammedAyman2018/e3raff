// add Navbar animation
const   collapseCloseBtn = document.getElementById('close'),
        collapseOpenBtn = document.getElementById('open'),
        collapseDiv = document.getElementById('collapse');

collapseOpenBtn.onclick = (e) => {
    collapseCloseBtn.style.display = "block";
    move(collapseDiv)
        .x(0)
        .set('opacity', 1)
        .duration('0.7s')
        .end();
}

collapseCloseBtn.onclick = (e) => {
    e.target.style.display = "none";
    move(collapseDiv)
        .x(window.innerWidth)
        .set('opacity', 0)
        .duration('0.7s')
        .end();
}

// navbar dropdowns
const   list_collapse = document.querySelectorAll('[data-show]'),
        dropDowns = document.querySelectorAll('[data-number]'),
        // Convert dropDowns to an Array 
        dropArray = Array.prototype.slice.call(dropDowns);

list_collapse.forEach(list => {
    list.onclick = () => {
        let listAttr = list.getAttribute('data-show'),
            target_drop = dropArray.filter(drop => drop.getAttribute("data-number") == listAttr)[0],
            else_drop = dropArray.filter(drop => drop.getAttribute("data-number") !== listAttr);

        target_drop.classList.toggle('hidden');
        else_drop.forEach(list => list.classList.add('hidden'));
    }
})

// Change articles layout
const   horizentalArticles = document.getElementById('horizontal-articles'),
        verticalArticles = document.getElementById('vertical-articles'),
        horizentalBtn = document.getElementById('horizontal'),
        verticalBtn = document.getElementById('vertical');

horizentalBtn.onclick = (e) => {
    if (horizentalArticles.classList.contains('hidden')) {
        horizentalArticles.classList.toggle('hidden');
        verticalArticles.classList.toggle('hidden');
    }
}

verticalBtn.onclick = (e) => {
    if (verticalArticles.classList.contains('hidden')) {
        horizentalArticles.classList.toggle('hidden');
        verticalArticles.classList.toggle('hidden');
    }
}

// Cahnge showen Carousel
const   siemas = document.querySelectorAll('.siema');

for (const siema of siemas) {
    new Siema({
        selector: siema,
        duration: 200,
        easing: 'ease-in-out',
        perPage: {
            0: 1,
            425: 2, // 2 items for viewport wider than 800px
            768: 3, // 3 items for viewport wider than 800px
            1240: 4 // 4 items for viewport wider than 1240px
        },
        startIndex: 0,
        draggable: true,
        threshold: 20,
        loop: true,
        rtl: true,
    });
    console.log('siema initilized successfully');
};
// const   prev = document.querySelector ('.prev');
// const   next = document.querySelector('.next');

// prev.addEventListener('click', () => mySiema.prev());
// next.addEventListener('click', () => mySiema.next());

const   toggleBtns = document.querySelectorAll('a[data-carousel-show]'),
        carousels = document.querySelectorAll('div[data-carousel-show]'),
        carouselsArray = Array.prototype.slice.call(carousels);

toggleBtns.forEach(btn => {
    btn.onclick = () => {
        let btnAttr = btn.getAttribute('data-carousel-show'),
            target_carousel = carouselsArray.filter(carousel => carousel.getAttribute("data-carousel-show") == btnAttr)[0],
            else_carousel = carouselsArray.filter(carousel => carousel.getAttribute("data-carousel-show") !== btnAttr);

            
        target_carousel.classList.toggle('hidden');
        else_carousel.forEach(carousel => {
            if(carousel.classList.contains('hidden') == false){
                carousel.classList.add('hidden')
            }
        })
    }
});