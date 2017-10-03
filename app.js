let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	//get value 
	let filterValue = document.getElementById('filterInput').value.toUppercase();
	console.log(filterValue);

//get names ul
	let ul = document.getElementById('names');
//get li 's from ul 
	let li = ul.querySelectorAll('li.collection-item');

	//loop through
	for(let i=0; i < li.length; i++){
		let a = li[i].getElementsByTagName('a')[0];
		//if matched 

		if(a.innerHTML.toUppercase().indexof(filterValue))
	}
}