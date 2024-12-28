//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops

const images = document.querySelectorAll( "img" );
for ( let i = 0; i < images.length; i++ ) {
    if ( i % 2 == 0 ) {
        images[ i ].style.borderColor = "red";
        images[ i ].style.borderStyle = "dashed";
    } else {
        images[ i ].style.borderColor = "gray";
        images[ i ].style.borderStyle = "solid";
    }
}