/********************************
 * Traversing the DOM
 * 1.1.1.1
 *
 *******************************/


//show box1 - PARENT
var h1 = document.querySelector('.box2');
    h1ParentEl = h1.parentElement;
    h1ParentNode = h1.parentNode;

    console.log(  h1ParentEl );
    console.log( h1ParentNode );




var posts = document.querySelector('.posts');
    postChildrenEls = posts.children,
    postChildrenNodes = posts.childNodes,
    postFirstCHildNode = posts.firstChild,
    postLastChildNode = posts.lastChild,
        lastElementChild = posts.lastElementChild,
        firstElementChild = posts.firstElementChild;
    h1childNode = document.querySelector( 'h1' );


console.log( postChildrenEls );
console.log( 'h1 - ', h1childNode );
console.log( 'space included:  ', postChildrenNodes );
console.log( 'first node', postFirstCHildNode );
console.log( 'last node ', postLastChildNode );
console.log( 'last el child ', lastElementChild );
console.log( 'first el child ', firstElementChild );


