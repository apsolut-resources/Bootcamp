/********************************
 * document.querySelector()
 * 1.1.1.1
 *
 *******************************/



var getItem = document.querySelector('.site-menu');
    console.log( getItem );


var getLatBox = document.querySelector( '.box1' ).children[0].children[0];
    console.log( getLatBox );

//pseudo elements
var pseudo = document.querySelectorAll( '.boxy.box3' );
    //console.log( pseudo );

    for ( i = 0, max = pseudo.length; i < max; i++ ) {
        console.log( 'this: \n' , pseudo , ' - ', pseudo.length )
    }

var getNthChild = document.querySelectorAll( '.boxy:nth-child(2) > div' );
    console.log( 'nth: \n',  getNthChild );
