/********************************
 * Get JSON
 *
 * 1.1.1.4
 * including JSON file in JS file before this, a
 * var myjson = JSON file
 *
 * JSONLINT https://jsonlint.com/
 *******************************/


var appendToThis = document.getElementById( 'page' ),
    content = document.querySelector( '.content' ),
    allDivs = document.querySelectorAll( 'div' );


console.log( 'children elements:', appendToThis.childElementCount );
console.log( 'first classList:', content.classList[0] );
console.log( allDivs.length );


console.log( '%c -- selecting child elements --', "color: red");

//Seleciting childrens Elements
var h1 = document.querySelector( '.title'),
    h1ParentEL = h1.parentElement,
    h1ChildrenEl = h1.children[0];
    h1ChildCount = h1.childElementCount;

    console.log( 'h1', h1);
    console.log( 'h1 parent el', h1ParentEL);
    console.log( 'h1 children el', h1ChildrenEl);
    console.log( 'h1 child count', h1ChildCount);

//Length and nodeType
console.log( '%c -- strong length and nodeType --', "color: red");
console.log( 'h1 parent length', h1ParentEL.childElementCount);
console.log( 'h1 parent length', h1ParentEL.childElementCount);

console.log( '%c -- nodeType  --', "color: red");
var contentId = document.getElementById( 'content' ),
    contentIdPrev = contentId.parentElement;
console.log( 'ID', contentId );
console.log( 'ID parent', contentIdPrev );