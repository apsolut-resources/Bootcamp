/********************************
 * Get JSON
 *
 * 1.1.1.4
 * including JSON file in JS file before this, a
 * var myjson = JSON file
 *
 * JSONLINT https://jsonlint.com/
 *******************************/


var getId = document.getElementById( 'page' ),
    getAfter = document.querySelector( '.after' ),
    newContent,
    newElement,
    extraThings,
    justText = 'Text';
newContent = '<div class="wrapper"><h1>Articles</h1></div>';
newContent += '<div class="inside"><div class="title">Title</div><div class="text">Text</div> </div>';
newContent += '<div class="after">empty</div>';
getId.innerHTML = newContent;
//getId.append( newContent )
//console.log( newContent )
