window.onload = function (){
	var bandWidthSpeed = {
		downloadSize : 1500000, //1MB
		
		measure : function (cb) {
			var myImage = new Image();
			var that = this;
			myImage.onload = function () {
				that.endTime = (new Date()).getTime();
				var speedKbps = that.calculate();
				cb(speedKbps);
			}

			myImage.onerror = function (err, msg) {
				console.log("Invalid image, or error downloading");
			}

			this.startTime = (new Date()).getTime();
			var cacheBuster = "?nnn=" + this.startTime; // everytime the page is refrsh, the browser treat the image file as new file
			myImage.src = "https://raw.githubusercontent.com/sumanbogati/images/master/jstutorial/bandwidth-test.jpg" + cacheBuster;
			console.log('Image Src ' + myImage.src);
		},
		
		/* calculate the bandwidth speed based on start and end time of image-downloaded process */
		calculate : function (){
			var duration = (this.endTime - this.startTime) / 1000;
			var bitsLoaded = this.downloadSize * 8;
			var speedBps = (bitsLoaded / duration).toFixed(2);
			var speedKbps = (speedBps / 1024).toFixed(2);
			return Math.round(speedKbps);
		}
	}
	
	/** Initialize the process to bandwidth checking **/
	document.getElementById('bandWidthCheck').addEventListener('click', function (){
		var result = document.querySelector("#bandWidthSpped .result");
		result.innerHTML = "Waiting....";
		bandWidthSpeed.measure(function (speedKbps){
				result.innerHTML = speedKbps + " Kbps";
			});
		}
	 );
}
