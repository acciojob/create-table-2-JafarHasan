function createTable() {
    //Write your code here
	const rows=parseInt(prompt("Input number of rows"));
	const cols=parseInt(prompt("Input number of columns"));

	const table=document.getElementById('myTable');

	for(let i=0;i<rows;i++){
		//table row
		let row=document.createElement("tr");
		 for (let j = 0; j < cols; j++) {
			 //row cell
			 let cell=document.createElement("td");
			 cell.textContent=`Row-${i} Column-${j}`;

			 //add cell to the row
			 row.appendChild(cell);
		 }
		//add row to the table
		table.appendChild(row);
	}
	

	
  
}
