
// add Navbar animation
const collapseBtn = document.getElementById('close'),
    collapseDiv = document.getElementById('collapse');

collapseBtn.onclick = (e) => {
    move(collapseDiv)
        .set('height', '0')
        .duration('2s')
    .end();
}