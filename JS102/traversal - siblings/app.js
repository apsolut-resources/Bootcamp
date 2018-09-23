/********************************
 * Traversing the DOM
 * 1.1.1.1
 * 
 * previousElementSibling - use in 99% cases
 * previousSibling will be wrong if there is empty space
 *
 *******************************/



var footerion = document.getElementById( 'articleOne' );
    footerElement = footerion.firstElementChild,
    footerPrev = footerion.previousElementSibling,
    footerNext = footerion.previousElementSibling,
    footerNextElement = footerion.nextElementSibling,
    footerPrevElement = footerion.previousElementSibling;


console.log( footerElement );
console.log( footerNext );
console.log( footerNext );
console.log( footerNextElement );
console.log( footerPrevElement );


console.log(document.getElementById("b1").previousElementSibling); // <img id="b0">
console.log(document.getElementById("b2").previousElementSibling); // "b1"
//fix for now: use previousElementSibling...
console.log(document.getElementById("b2").previousElementSibling); // "b1"


