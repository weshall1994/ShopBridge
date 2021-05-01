function SearchFunction(inputId, tableId) {
    console.log("Parameters recieved : " + inputId + " " + tableId)
    if (inputId && tableId) {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById(inputId);
        filter = input.value.toUpperCase();
        table = document.getElementById(tableId);
        tr = table.getElementsByTagName("tr");
        if (input) {
            if (table) {
                for (i = 0; i < tr.length; i++) {
                    if (tr) {
                        txtValue = tr[i].textContent || tr[i].innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                }
            }
        }
    }
}


module.exports = {
    SearchFunction
}