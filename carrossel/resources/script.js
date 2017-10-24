/*
    @author tramasoli
*/

var imagens = [
    'http://patriciarammos.com/wp-content/uploads/2015/04/PicMonkey-CollageTimba.png',
    'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/4/9/f/e/49fe3a20d3ded12e1e4896f59a4a685d.jpg',
    'http://www.correio24horas.com.br/fileadmin/acervo/uploads/RTEmagicC_Timbalada.jpg.jpg'
];
var currImagem=-1;

function carrossel() {
    currImagem++;
    currImagem %= imagens.length;
    elmImg = document.getElementById('logo');
    newImg = elmImg.cloneNode(true);
    newImg.src = imagens[currImagem];
    elmImg.parentNode.replaceChild(newImg, elmImg);
    console.log(newImg);  
    setTimeout("carrossel()", 5000);
}