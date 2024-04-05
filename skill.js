function myFunction() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange("A1");
  var value = range.getValue();
  Logger.log(value);
}
function calculateNumbers(var1, var2) {
  return var1 + var2;
}