if(window.Worker){
	
// the data should be in object format
var car = {
	model : 'GLA-200',
	color : 'White',
	price : null
}

// the data would pass to the worker
anyWorker.postMessage(car); 
	
// received data with onmessage function
// Whatever object is passed by worker can be found
// at event.data

anyWorker.onmessage = function (e){
	// get modified object from worker
	var mcar = e.data; 
	console.log(
		'Car model is ' + mcar.model + '\n' + 
		'Car color is ' + mcar.color + '\n' + 
		'Car price is ' + mcar.price + '\n' + 
		'Car company is ' + mcar.company + '\n' 
	);
}
}