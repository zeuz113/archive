// JavaScript Document
var orientationSide


	// Announce the new orientation number
	
	if(window.orientation==0){
		//alert('vertical')
		orientationSide="vertical"
		
		}else{
			//alert('horizontal')
			orientationSide="horizontal"
			}
	


window.addEventListener("orientationchange", function() {
	// Announce the new orientation number
	//alert('cambio '+window.orientation);
	if(window.orientation==0){
	//	alert('vertical')
		orientationSide="vertical"
		
		}else{
		//	alert('horizontal')
			orientationSide="horizontal"
			}
	
	
	
}, false);







if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientation is supported");
  window.addEventListener('deviceorientation', function(eventData) {
        var LR = eventData.gamma;
        var FB = eventData.beta;
        var DIR = eventData.alpha;
        deviceOrientationHandler(LR, FB, DIR);
        }, false);
} else {
        alert("Not supported on your device or browser. Sorry.");
}
 
 
function deviceOrientationHandler(LR, FB, DIR) {
   //for webkit browser
  // document.getElementById("imgLogo").style.webkitTransform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";
 
   //for HTML5 standard-compliance
  // document.getElementById("imgLogo").style.transform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";
  //console.log('dir '+DIR)
    //console.log('fb '+FB)
	 
	  //$('#giro').html('giro '+LR)
	  
	  
		  
		$('#giro').html('giro FB '+Math.floor(FB)+ ' giro LR '+Math.floor(LR)+" dir "+Math.floor(DIR))
		 
		 $('#giro2').html('orientationSide '+orientationSide)
	
	
	///////////////////////	
	
	 
		 if(orientationSide=="vertical"){
		 
		if(FB>=71){
				$('#giro1').html('centro')
				if(animando==true && touchin==false){
		  console.log('centro')
		  lado='center'
		  
		  descansa()
		  animando=false
		 }
			
			}
			 
			 
			 else if(FB<=70 && LR>0)
			 {
				$('#giro1').html('der')
				avanza()
		  lado='izq'
				 
				
			 
			
			 }else if(FB<=70 && LR<0){
				$('#giro1').html('Izq')
				retrocede()
		  lado='der'
				//  $('#giro1').html('vertical')
			 }
		 
		 
		 
		 
		 }
		 
		 
			///////////////////////	
	
	 
		else if(orientationSide=="horizontal"){
		 
		if(FB>-8 && FB<9){
				$('#giro1').html('centro')
				if(animando==true && touchin==false){
		  console.log('centro')
		  lado='center'
		  
		  descansa()
		  animando=false
		 }
			
			}
			 
			 
			 else if(FB>9)
			 {
				$('#giro1').html('der')
				avanza()
		  lado='izq'
				 
				
			 
			
			 }else if(FB<=-9){
				$('#giro1').html('Izq')
				retrocede()
		  lado='der'
				//  $('#giro1').html('vertical')
			 }
		 
		 
		 
		 
		 }
		  
	  
	  
	  
	  
	  
	
		  
  
}

