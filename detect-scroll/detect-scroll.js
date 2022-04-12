// 1 - Est-ce qu'on scrolle ? => écouteur d'évènement

// 2 - dans quelle direction ?
//  => il faut écouter un point de départ et un point d'arrivée
//  => Attention, à chaque scroll, il faut comparer les points de départ et d'arrivée

// 3 - exécuter une méthode à chaque changement de direction

let start = 0;
let isLastScrollDown = false;
const headerElt = document.querySelector('header');

const showHeader = () => {
    headerElt.classList.remove("disabled");
};

const hideHeader = () => {
    headerElt.classList.add("disabled");
};

// window.addEventListener("scroll", function () {
//     // console.log(isLastScrollDown);
//
//     const isScrollDown = start < window.pageYOffset;
//     const isNewDirection = isLastScrollDown !== isScrollDown;
//
//     // On détecte le changement de direction
//     if (isNewDirection) {
//         // console.log('change direction');
//
//         // On detecte la direction du scroll (up ou down)
//         if (isScrollDown) {
//             console.log( "scroll down")
//             isLastScrollDown = true;
//             showHeader();
//         } else {
//             console.log( "scroll up")
//             isLastScrollDown = false;
//             hideHeader();
//         }
//     }
//     start =  window.pageYOffset;
// });

let oldValue = 0
let newValue = 0
window.addEventListener('scroll', (e) => {
    newValue = window.pageYOffset;
    if (oldValue < newValue) {
        console.log("Up");
        hideHeader();
    } else if (oldValue > newValue) {
        console.log("Down");
        showHeader();
    }
    oldValue = newValue;
});

