(function() {
  'use strict';

  // Objeto con metodo que se utilizará globalmente
  var renglonesJS = {
    getRenglones: getRenglones
  };

  var renglones = {
    cantidad: undefined
  }

  function getRenglones(textBlock) {
    cantidadRenglones(textBlock);
    return Object.assign({}, renglones);
  }

  function cantidadRenglones(textBlock) {
    let rowCount = 0;

    for (var i = 0; i < textBlock.length; i++) {
      if (textBlock[i].includes('\n') && !textBlock[i - 1].includes('\n')) {
        rowCount++;
      }
    }
    renglones.cantidad = rowCount + 1;
  }

  // Valida si el objeto está declarado
  if (typeof window.renglonesJS === 'undefined')
    window.renglonesJS = renglonesJS;
})();
