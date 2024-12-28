/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = [ 'red', 'aqua', 'orange', 'purple', 'lightgreen' ];

let matn = prompt( "enter your sentece" );
let arr = matn.split( "" );
let newArr = [];
for ( let x of arr ) {
    newArr.push( `<span>${ x }</span>` );
}

let myMatn = document.querySelector( "#word" );
myMatn.innerHTML = newArr.join( "" );
let myLetters = document.querySelectorAll( "#word span" );

for ( let i = 0; i < myLetters.length; i++ ) {
          myLetters[ i ].style.color = colors[ i%colors.length ];
}








