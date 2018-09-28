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
var oneLineJSON = `{"id":1 ,"title": "hello world","content": "Welcome to WordPress!"}`,
    JSONObj;

console.log( '%c -- JS Object --', "color: red");
console.log( oneLineJSON );
console.log( oneLineJSON.title );

//JSObject to JSON
JSONObj = JSON.parse( oneLineJSON )
console.log( '%c -- JSON with stringify --', "color: red");
console.log( JSONObj );
console.log( JSONObj.title );

//JSObject to JSON
// JSON.parse( object, revivor )
console.log( '%c -- revivor --', "color: red");
function revivor( key, value) {
    if( typeof value === "number") {
        return (value +1) * 2;
    }
    return value
}
JSONreviver = JSON.parse( oneLineJSON , revivor)
console.log( JSONreviver );

//Stringify
var postObj = {
        'id':1,
        'title':'Hello world!',
        'content': 'Welcome to WordPress!'
    },
    JSONobj;
console.log( '%c -- revivor --', "color: red");
console.log( 'object:' , postObj );
console.log( '%c -- stringify --', "color: red");
JSONobj = JSON.stringify( postObj );
console.log( JSONobj );
// JSON cant because its not object
// JSON.stringify( obj, replacer, space)
console.log( 'title undefine:', JSONobj );
