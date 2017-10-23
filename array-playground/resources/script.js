/*
    @author tramasoli
*/

function fillSpan(span) {
    let arrayFruits = [
        'Apple',
        'Apricot',
        'Avocado',
        'Banana',
        'Bilberry',
        'Blackberry',
        'Blackcurrant',
        'Blueberry',
        'Boysenberry',
        'Crab apples',
        'Currant',
        'Cherry',
        'Cherimoya',
        'Chico fruit',
        'Cloudberry',
        'Coconut',
        'Cranberry',
        'Cucumber',
        'Custard apple',
        'Damson',
        'Date',
        'Dragonfruit',
        'Durian',
        'Elderberry'
    ];

    while (span.firstChild) {
        span.removeChild(span.firstChild);
    };

    span.appendChild(document.createTextNode(arrayFruits.join(', ')));
    
}