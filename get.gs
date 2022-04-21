 function doGet(request){
  var page = request.parameter.page || 1;
  var limit = request.parameter.limit || 10;
  var sheet = SpreadsheetApp.openById("1WnLw5Qgii7WtEtGFRdDpHt8oaFEBPVxBe1u5oJck4f8");

var values = sheet.getActiveSheet().getDataRange().getValues();
var data = [];
for(var i = 1; i < values.length ; i++){
  var row = values[i];

  var updates = {};
  updates['id'] = row[0];
  updates['name'] = row[1];
  updates['profile'] = row[2];
  updates['source'] = row[3];
  updates['title'] = row[4];
  updates['image'] = row[5];
  updates['url'] = row[6];

  data.push(updates);

}


return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);


}
// function doGet(e) {
//   var page = e.parameter.page || 1;
//   var limit = e.parameter.limit || 10;
//   var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1WnLw5Qgii7WtEtGFRdDpHt8oaFEBPVxBe1u5oJck4f8/edit#gid=0");
//   var sheet = ss.getSheetByName("updates");
//   return getUsers(sheet, page, limit); 
// }

// function getUsers(sheet, page, limit){
//   var rows = sheet.getDataRange().getValues();
//   var dataArray = rows.splice(limit * (page - 1), limit).reduce((ar, [a, b, c, d, e, f, g]) => ar.concat({id: a, name: b, profile: c, source: d, title: e, image: f, url: g}), []);
//   var jo = {};
//   jo = dataArray;
//   var result = JSON.stringify(jo);
//   return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
// }



//search fac
function doGet(e) {
 var page = e.parameter.page || 1;
  var limit = e.parameter.limit || 10;
  var search = e.parameter.search || "";
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/10S8Igzt1tpqUBgJHVKpny-2s6G3Y3-vFsLMvlZVqpkc/edit#gid=810612111");
  var sheet = ss.getSheetByName("list_film");
  return getUsers(sheet, page, limit, search);
}

function getUsers(sheet, page, limit, search){
  var lowCase = search.toString().toLowerCase();
  var rows = sheet.getDataRange().getValues().filter(([,,c]) => c.toString().toLowerCase().includes(lowCase));
  var dataArray = rows.splice(limit * (page - 1), limit).reduce((ar, [a, b, c, d]) => ar.concat({id: a, year: b, title: c, img: d}), []);
  var jo = {};
  jo.user = dataArray;
  var result = JSON.stringify(jo);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
//end
  var page = e.parameter.page || 1;
  var limit = e.parameter.limit || 10;
  var search = e.parameter.search || "";
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/10S8Igzt1tpqUBgJHVKpny-2s6G3Y3-vFsLMvlZVqpkc/edit#gid=810612111");
  var sheet = ss.getSheetByName("list_film");
  return getUsers(sheet, page, limit, search); 
}

function getUsers(sheet, page, limit, search){
  var rows = sheet.getDataRange().getValues().filter(([,b]) => b == search);
  var dataArray = rows.splice(limit * (page - 1), limit).reduce((ar, [a, b, c, d]) => ar.concat({id: a, year: b, title: c, img: d}), []);
  var jo = {};
  jo.user = dataArray;
  var result = JSON.stringify(jo);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
//end
   function doGet(e) {
   var page = e.parameter.page || 1;
    var limit = e.parameter.limit || 10;
    var search = e.parameter.search || "";
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/10S8Igzt1tpqUBgJHVKpny-2s6G3Y3-vFsLMvlZVqpkc/edit#gid=810612111");
    var sheet = ss.getSheetByName("list_film");
    return getUsers(sheet, page, limit, search); 
  }

  function getUsers(sheet, page, limit, search){
    var rows = sheet.getDataRange().getDisplayValues().filter(([,b]) => b == search);
    var rows = sheet.getDataRange().getValues().slice(1);
    var rows = sheet.getDataRange().getValues().reverse();
    var dataArray = rows.splice(limit * (page - 1), limit).reduce((ar, [a, b, c, d]) => ar.concat({id: a, year: b, title: c, img: d}), []);
    var jo = {};
    jo.user = dataArray;
    var result = JSON.stringify(jo);
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  }
//end
function doGet(e) {
 var page = e.parameter.page || 1;
  var limit = e.parameter.limit || 10;
  var search = e.parameter.search || "";
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/10S8Igzt1tpqUBgJHVKpny-2s6G3Y3-vFsLMvlZVqpkc/edit#gid=810612111");
  var sheet = ss.getSheetByName("list_film");
  return getUsers(sheet, page, limit, search);
}

function getUsers(sheet, page, limit, search){
  var rows = sheet.getDataRange().getDisplayValues().filter(([,,c]) => c == search);
  var dataArray = rows.splice(limit * (page - 1), limit).reduce((ar, [a, b, c, d]) => ar.concat({id: a, year: b, title: c, img: d}), []);
  var jo = {};
  jo.user = dataArray;
  var result = JSON.stringify(jo);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
//end but for reverse you have to use this below code in place
 function getUsers(sheet, page, limit, search){
    var rows = sheet.getDataRange().getValues().slice(1).filter(([,,c]) => c == search).reverse();
    var dataArray = rows.splice(limit * (page - 1), limit).reduce((ar, [a, b, c, d]) => ar.concat({id: a, year: b, title: c, img: d}), []);
    var jo = {};
    jo.user = dataArray;
    var result = JSON.stringify(jo);
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  }



