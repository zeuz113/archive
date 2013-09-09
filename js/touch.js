// JavaScript Document
$(function() {			
					//Enable swiping...
					$("#canvas").swipe( {
						swipeStatus:function(event, phase, direction, distance, duration, fingers)
						{
							//console.log('swipe')
							console.log('swipe datos '+phase)
							var dataActual=phase
							setAnimation(direction)
							
							var str = "<h4>Swipe Phase : " + phase + "<br/>";
							str += "Direction from inital touch: " + direction + "<br/>";
							str += "Distance from inital touch: " + distance + "<br/>";
							str += "Duration of swipe: " + duration + "<br/>";
							str += "Fingers used: " + fingers + "<br/></h4>";
		
							//Here we can check the:
							//phase : 'start', 'move', 'end', 'cancel'
							//direction : 'left', 'right', 'up', 'down'
							//distance : Distance finger is from initial touch point in px
							//duration : Length of swipe in MS 
							//fingerCount : the number of fingers used
							
							
							if(dataActual=="end"){
								console.log('end')
								lado='center'
								animando=false
								descansa()
								touchin=false
								
								}
							
							
							

							if (phase!="cancel" && phase!="end") {
								if (duration<5000)
									str +="Under maxTimeThreshold.<h3>Swipe handler will be triggered if you release at this point.</h3>"
								else
									str +="Over maxTimeThreshold. <h3>Swipe handler will be canceled if you release at this point.</h3>"
							
								if (distance<200)
									str +="Not yet reached threshold.  <h3>Swipe will be canceled if you release at this point.</h3>"
								else
									str +="Threshold reached <h3>Swipe handler will be triggered if you release at this point.</h3>"
									
							}
							
							if (phase=="cancel")
								str +="<br/>Handler not triggered. <br/> One or both of the thresholds was not met "
							if (phase=="end")
								str +="<br/>Handler was triggered."	
								
								
							
							$("#test").html(str);
						},
						threshold:200,
						maxTimeThreshold:5000,
						fingers:'all'
					});
				});
				
				
				
				function setAnimation(datos){
					
					
					
					touchin=true
					if(datos==datosAnterior){
						
						animando=true
						}else{
							animando=false
							datosAnterior=datos
							}
					
					
					if(datos=="right" && 250){
						avanza()
						lado='izq'
						// animation.play("corre", "loop");
					//	alert('RIGHT')
						//blob.setAnimation('punch');
						//blob.afterFrame(2, function() {
           					//blob.setAnimation('idle');});
						}
						
						
						if(datos=="left" && 250){
							retrocede()
							lado='der'
						// animation.play("back1", "loop");
					//	alert('RIGHT')
						//blob.setAnimation('punch');
						//blob.afterFrame(2, function() {
           					//blob.setAnimation('idle');});
						}
					
					}