//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

const firstPara = document.querySelector( "p" );
console.log( firstPara );

const secondPara = document.querySelector( "#para2" );
const thirdPara = document.querySelector( "#para3" );
const fourthPara = document.querySelector( "#para4" );

console.log( firstPara, secondPara, thirdPara, firstPara );

const paras = document.querySelectorAll( "p" );
console.log( paras );

for ( let i = 0; i < paras.length; i++ ) {
    console.log( paras[ i ].textContent );
}

fourthPara.textContent = "I am 4th paragrah";

firstPara.classList.add( "parag" );
console.log( firstPara );

secondPara.classList.add( "parag", "bgcolor" );

firstPara.classList.toggle( "parag" );

thirdPara.classList.toggle( "pg1" );

console.log( firstPara );
console.log( secondPara );
console.log( thirdPara );

secondPara.classList.remove( "parag" );
console.log( secondPara );

secondPara.setAttribute( "id", "p2" );
console.log( secondPara );

firstPara.style.backgroundColor = "#ccc";

secondPara.style.textAlign = "center";

thirdPara.style.backgroundColor = "#ccc";

fourthPara.style.fontSize = "20px";
fourthPara.style.borderColor = "red";
fourthPara.style.borderStyle = "solid";
fourthPara.style.borderWidth = "1px";

console.dir( fourthPara );

for ( let i = 0; i < paras.length; i++ ) {
    if ( i % 2 == 0 ) {
        paras[ i ].style.color = "green";
    } else {
        paras[ i ].style.color = "red";
    }
}








