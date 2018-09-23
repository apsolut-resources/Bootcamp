/********************************
 * Traversing the DOM
 * 1.1.1.1
 *
 *******************************/



var footerion = document.getElementById( 'articleOne' );
    footerElement = footerion.firstElementChild,
    footerPrev = footerion.previousSibling,
    footerNext = footerion.nextSibling,
    footerNextElement = footerion.nextElementSibling,
    footerPrevElement = footerion.previousElementSibling;


console.log( footerElement );
console.log( footerNext );
console.log( footerNext );
console.log( footerNextElement );
console.log( footerPrevElement );


console.log(document.getElementById("b1").previousSibling); // <img id="b0">
console.log(document.getElementById("b2").previousSibling); // "b1"
//fix for now: use previousElementSibling...
console.log(document.getElementById("b2").previousElementSibling); // "b1"


