// whatever the object is passed by main thread
// can be found as e.data in this function with worker file
onmessage = function (e){
	var wCar = e.data;
	wCar.price = '$70000';
	wCar.company = 'Mercidies Benz';
	postMessage(wCar);
}


