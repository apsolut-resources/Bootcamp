/********************************
 * Get JSON
 *
 * 1.1.1.4
 * 1.5.2
 * including JSON file in JS file before this, a
 * var myjson = JSON file
 *
 * JSONLINT https://jsonlint.com/
 *
 * @URL https://javascriptforwp.com/courses/javascript/sections/json-local-storage/lesson/json-and-javascript/
 *******************************/

// JS object into valid JSON
var oneLineJSON = {
    "id":1 ,
    "title": "hello world",
    "content": "Welcome to WordPress!",
    "replaceNumber":77
    },
    JSONObj;

console.log( '%c -- stringify replacer --', "color: red");
function replacer( key, value) {
    if( typeof value === 'number' && value == 77  ) {
        return 'replaced number with text';
    }
    if( typeof value === 'number' && value == 1   ) {
        return undefined;
    }

    return value;
}
JSONObj = JSON.stringify( oneLineJSON, replacer, ' ') ;
console.log( JSONObj )