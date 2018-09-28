/********************************
 * Get JSON
 *
 * 1.1.1.4
 * including JSON file in JS file before this, a
 * var myjson = JSON file
 *
 * JSONLINT https://jsonlint.com/
 *******************************/

// var getJson = JSON.stringify( myjson ),
//     content = document.getElementById( 'page' ),
//     myPage,
//     newmarkup,
//     extraThings;
//
// newmarkup = '<div class=\"title\">Title here replace with json</div>';
// newmarkup += '<div class=\"content\"> Replace content with json</div>';
// newmarkup += 'outro just text';
//
// content.innerHtml = newmarkup;
// console.log( newmarkup )
// console.log( getJson )

// crete post in DOM

var getId = document.getElementById( 'page' ),
    newContent,
    newElement,
    extraThings;

var justText = 'Text';
newContent = '<div class="wrapper"><h1>Articles</h1></div>';
newContent += '<div class="inside"><div class="title">Title</div><div class="text">Text</div> </div>';
getId.outerHTML = newContent;
getId.append( newContent )
console.log( newContent )
