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

    for (var i = 0; i < textBlock.value.length; i++) {
      if (textBlock.value[i].includes('\n') && !textBlock.value[i - 1].includes('\n')) {
        rowCount++;
      }
    }
    renglones.cantidad = rowCount;
  }

  // Valida si el objeto está declarado
  if (typeof window.renglonesJS === 'undefined')
    window.renglonesJS = renglonesJS;
})();
