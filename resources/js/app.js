// Add click event listener to all first column of header of all tables.
let tables = document.getElementsByTagName('table');
for (let i = 0; i < tables.length; i++) {
    let firstRow = tables[i].rows[0];
    let firstHeader = firstRow.children[0];
    firstHeader.addEventListener('click', selectRandomTableResult);
}

function selectRandomTableResult() {
    // Get the triggered table. Start from th -> tr -> tbody -> table.
    let table = event.target.parentElement.parentElement.parentElement;

    // Remove "selected" class from all rows, to clear previous result.
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].classList.remove("selected");
    }

    // Add "selected" class to a random result.
    let rowCount = table.rows.length - 1;
    let randomIndex = Math.floor(Math.random() * rowCount + 1);
    table.rows[randomIndex].classList.add("selected");
}