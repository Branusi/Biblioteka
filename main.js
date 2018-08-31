let categorizeButton = document.getElementById('categorize');
let silaba = silabaJS;
let renglones = renglonesJS;
let tema = temaJS;

categorizeButton.onclick = function() {

    let textBlock = document.getElementById('poem').value;
    
    let categoryTitle = document.getElementById('category-title');

    categoryTitle.textContent = 'La cantidad de sílabas es de: ' + silaba.getSilabas(textBlock).numeroSilaba + ' La cantidad de versos es de: ' + renglones.getRenglones(textBlock).cantidad + ' Y el poema trata sobre: ' + temaJS.getTema(textBlock).palabraClave;



};		