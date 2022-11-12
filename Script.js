

function Addrowtop() {
    var table = document.getElementById('first');
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
     
    
      
      cell1.innerHTML = 1;
    
      cell2.innerHTML = "Pehla";
    cell3.innerHTML = "Singh";
    cell4.innerHTML = "Jamshedpur";
    cell5.innerHTML = "Jharkhand";
    for(var i=1; i<table.rows.length;i++)
    {
      var row=table.rows[i];
      var cell1=row.cells[0];
      cell1.innerHTML=i;
    }
    
    
    
    
  }
  
  function Addrowbottom() {
    var table = document.getElementById('first');
    var row = table.insertRow(first.row);
    var cello1 = row.insertCell(0);
    var cello2 = row.insertCell(1);
    var cello3 = row.insertCell(2);
    var cello4 = row.insertCell(3);
    var cello5 = row.insertCell(4);
    cello1.innerHTML = first.rows.length-1;
    cello2.innerHTML = "Akhri";
    cello3.innerHTML = "Singh";
    cello4.innerHTML = "Jamshedpur";
    cello5.innerHTML = "Jharkhand";
  }
  