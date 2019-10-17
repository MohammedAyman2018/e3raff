
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
    e.target.style.display="none";
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
    list.onclick= () => {
        let listAttr = list.getAttribute('data-show'),
            target_drop = dropArray.filter( drop => drop.getAttribute("data-number") == listAttr)[0],
            else_drop = dropArray.filter( drop => drop.getAttribute("data-number") !== listAttr);
        
        target_drop.classList.toggle('hidden');
        else_drop.forEach(list => list.classList.add('hidden'));
    }
})

// Change articles layout
const   horizentalArticles = document.getElementById('horizontal-articles'),
        verticalArticles = document.getElementById('vertical-articles'),
        horizentalBtn = document.getElementById('horizontal'),
        verticalBtn = document.getElementById('vertical');
    
horizentalBtn.onclick = (e) =>{
    if(horizentalArticles.classList.contains('hidden')){
        horizentalArticles.classList.toggle('hidden');
        verticalArticles.classList.toggle('hidden');
    }
}

verticalBtn.onclick = (e) =>{
    if(verticalArticles.classList.contains('hidden')){
        horizentalArticles.classList.toggle('hidden');
        verticalArticles.classList.toggle('hidden');
    }
}
