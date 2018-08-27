let textBlock = document.getElementById('poem');
let categorizeButton = document.getElementById('categorize');
let categoryTitle = document.getElementById('category-title');
let silaba = silabaJS.getSilabas('cantimplora').numeroSilaba;
let renglones = renglonesJS;

categorizeButton.onclick = function() {

  categoryTitle.textContent = 'La cantidad de sílabas es de: ' + silaba + ' Y la cantidad de versos es de: ' + renglones.getRenglones(textBlock).cantidad;


console.log(renglones.getRenglones(textBlock).cantidad)

};
