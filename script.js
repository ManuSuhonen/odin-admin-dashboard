console.log("object");

svgs = document.getElementsByTagName('svg');

Array.from(svgs).map(x => {
    x.setAttribute('viewBox', "0 0 24 24");
})

paths = document.querySelectorAll('#left-side * path')

Array.from(paths).map(x => {
    x.setAttribute('fill', "rgb(255, 255, 255)");
})
