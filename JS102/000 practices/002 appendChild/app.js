/********************************
 * Styling
 * 1.1.1.1
 *
 *
 *******************************/



var aHref = document.querySelector( 'a.active' ),
    aHrefBefore = window.getComputedStyle( aHref, 'before' ).width,
    aHrefAfter = window.getComputedStyle(
        document.querySelector( 'a.active' ), 'before' ).width
    ;

console.log( aHref );
console.log( 'before:  ', aHrefBefore );
console.log( 'after inline script:  ', aHrefAfter );

//changing values - last A in navigation
var aSecond = document.querySelectorAll( 'nav a' )[2],
    aSecondColor = window.getComputedStyle( aSecond ).color;
    console.log( aSecond );
    console.log( aSecondColor );




