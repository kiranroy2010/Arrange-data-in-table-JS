const sortBtn = document.getElementById("sortBtn");
    const table = document.getElementById("dataTable");
    
    let sortOrder = "asc";
    
    sortBtn.addEventListener("click", function() {
      sortTable(table, sortOrder);
    
      if (sortOrder === "asc") {
        sortOrder = "desc";
        sortBtn.textContent = "Ascending Order";
      } else {
        sortOrder = "asc";
        sortBtn.textContent = "Normal";
      }
    });
    
    function sortTable(table, sortOrder) {
      const tbody = table.getElementsByTagName("tbody")[0];
      const rows = [].slice.call(tbody.rows);
    
      const compare = (row1, row2) => {
        const cell1 = row1.cells[0].textContent;
        const cell2 = row2.cells[0].textContent;
        if (sortOrder === "asc") {
          return cell1 - cell2;
        } else {
          return cell2 - cell1;
        }
      };
    
      rows.sort(compare);
    
      table.removeChild(tbody);
    
      for (const row of rows) {
        tbody.appendChild(row);
      }
    
      table.appendChild(tbody);
    }