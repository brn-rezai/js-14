//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
const heading1 = document.querySelector( ".wrapper h1" );
heading1.innerHTML = "";
heading1.innerHTML = "Asabeneh Yetayeh challenges in <span>2020</span>";
const year = document.querySelector( ".wrapper h1 span" );
function color1() {
    year.style.color = "red";
}

function color2() {
    year.style.color = "orange";
}
function color3() {
    year.style.color = "lightgreen";
}

let timer1 = setInterval( color1, 1000 );
let timer2 = setInterval( color2, 2000 );
let timer3 = setInterval( color3, 3000 );
//todo2: Completed challenge has background green
const liHa = document.querySelectorAll( ".wrapper ul li" );
for ( let x of liHa ) {
    let y = x.textContent.split( " " );

    if ( y.includes( "Done" ) ) {
        x.style.backgroundColor = "green";
    } else if ( y.includes( "Ongoing" ) ) {
        x.style.backgroundColor = "yellow";
    } else if ( y.includes( "Coming" ) ) {
        x.style.backgroundColor = "red";
    }
}
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red






