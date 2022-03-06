function ejecutarAnalisis() {
  var enlaceModeloCanonico = SpreadsheetApp.getActiveSheet().getRange("B3").getValue();
  var enlaceBaseDeDatos = SpreadsheetApp.getActiveSheet().getRange("B5").getValue();
  var enlaceDataDriven = SpreadsheetApp.getActiveSheet().getRange("B7").getValue();

  if(enlaceModeloCanonico != "") return AnalisisModelosCanonicos.procesarunMC(enlaceModeloCanonico, enlaceBaseDeDatos, enlaceDataDriven);
}

function limpiarDatosAntiguos()
{
  AnalisisModelosCanonicos.politicaPrivacidad();
}
