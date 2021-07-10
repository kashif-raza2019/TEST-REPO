function addRow() {
   var table = document.getElementById("myTableData");
   var rowCount = table.rows.length+1;
    
    var chtml = "";
    chtml+='<tr id='+rowCount+'style="text-align: center;">'
            + '<td class="dropdown" >'
                + '<form action="" id="programmeCode">'
                    + '<select required>'
                      + '<option value="" disabled selected hidden>Select</option>'
                   +'</select>'
                 +'</form>'
             +'</td>'
             +'<td><input type="text" id="programmeName" placeholder="Programme Name"></td>'
             +'<td class="dropdown" >'
               +  '<form action="" id="year" >'
                    + '<select required>'
                      + '<option value="" disabled selected hidden>Select</option>'
                   +'</select>'
                 +'</form>'
            + '</td>'
            + '<td><input type="text" id="Percentage" placeholder="Percentage"></td>'
            + '<td><input type="text" id="relevantDoc" placeholder="Link of relevant document"></td>'
            + '<td id="buttonrow" style="border-right:hidden;border-top:hidden;border-bottom:hidden;">'
               + '<button type="button" id="remove" value="Remove" onclick="Javascript:generatePopup(this)" class="btn btn-warning">Remove</button>'
             +'</td>'

          +'</tr>'
         $('#myTableData > tbody').append(chtml);
}
 function generatePopup(X){
  var proceed = confirm("Are you sure you want to proceed?");
if (proceed) {
deleteRow(X);
} else {
}
  
  
 }
function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
 
