
/**
 * Gets the Sheet Name of a selected Sheet.
 *
 * @param {number} option 0 - Current Sheet, 1  All Sheets, 2 Spreadsheet filename
 * @return The input multiplied by 2.
 * @customfunction
 *
 * https://yagisanatode.com/2018/11/21/google-apps-script-how-to-get-the-sheet-name-and-spreadsheet-name-and-add-to-a-cell-on-google-sheets-with-a-custom-function/#more-776
 */
 
function sheetName(option) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet()
  var thisSheet = sheet.getName();
  
  //Current option Sheet Name
  if(option === 0){
    return thisSheet;
  
  //All Sheet Names in Spreadsheet
  }else if(option === 1){
    var sheetList = [];
    ss.getSheets().forEach(function(val){
       sheetList.push(val.getName())
    });
    return sheetList;
  
  //The Spreadsheet File Name
  }else if(option === 2){
    return ss.getName();
  
  //Error  
  }else{
    return "#N/A";
  };
};


//function sheetUrl() {
//  var SS = SpreadsheetApp.getActiveSpreadsheet();
//  var ss = SS.getActiveSheet();
//  var url = '';
//  url += SS.getUrl();
//  url += '#gid=';
//  url += ss.getSheetId(); 
//  return url;
//}


function sheetUrl(sheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var sheetList = [];

  for(var i=0;i < 1; i++){
    sheetList.push(sheets[i].getName())
 }
 
  // for(var i=0;i < sheets.length; i++){
  //    sheetList.push(sheets[i].getName())
  // }
  
   return sheetList;
}
