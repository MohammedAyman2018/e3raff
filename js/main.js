
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