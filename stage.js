// JavaScript Document



		
		
	


	function setStage() {
	
		
		sky = new createjs.Shape();
		sky.graphics.beginBitmapFill(loader.getResult("sky")).drawRect(0,0,w,h);
		
		groundImg = loader.getResult("ground");
		ground = new createjs.Shape();
		ground.graphics.beginBitmapFill(groundImg).drawRect(-100, 0, w+groundImg.width+100, groundImg.height);
		ground.tileW = groundImg.width
		ground.y = h-groundImg.height;
		
		hill = new createjs.Bitmap(loader.getResult("hill"));
		hill.setTransform(Math.random() * w, h-hill.image.height*3-groundImg.height, 3, 3);
		     
		hill2 = new createjs.Bitmap(loader.getResult("hill2"));
		hill2.setTransform(Math.random() * w, h-hill2.image.height*3-groundImg.height, 3, 3);
	
		var data = new createjs.SpriteSheet({
			"images": [loader.getResult("grant")],
			"frames": {"regX": 0, "height": 292, "count": 64, "regY": 0, "width": 165},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {"run": [0, 25, "run", 1.5], "jump": [26, 63, "run"]}
		});
		grant = new createjs.Sprite(data, "run");
		grant.setTransform(-200, 90, 0.8, 0.8);
		//grant.framerate = 20;

		stage.addChild(sky, hill, hill2, ground, grant);
		stage.addEventListener("stagemousedown", handleJumpStart);

	//	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.setFPS(10);
	
	 initTick=function(){
		// console.log('alert')
		createjs.Ticker.addEventListener("tick", tick);
	}
	
		//createjs.Ticker.addEventListener("tick", tick);
	}

	function handleJumpStart() {
		grant.gotoAndPlay("jump");
	}

	function tick(event) {
		deltaS = event.delta/1000;
		position = grant.x+150*deltaS;
		
		//grantW = grant.getBounds().width*grant.scaleX;
	//	grant.x = (position >= w) ? -grantW : position;

		//ground.x = (ground.x-deltaS*200) % ground.tileW;
		//ground.x = ((ground.x+deltaS*200) % ground.tileW)
		
		
		
		izquierda=function (){
			ground.x = (ground.x-deltaS*200) % ground.tileW;
		
			
		
		
		
		hill.x = (hill.x - deltaS*30);
		if (hill.x + hill.image.width*hill.scaleX <= 0) { hill.x = w; }
		
		hill2.x = (hill2.x - deltaS*45);
		if (hill2.x + hill2.image.width*hill2.scaleX <= 0) { hill2.x = w; }
		}
		
	
		derecha=function (){
			
		
		ground.x = ((ground.x+deltaS*200) % ground.tileW)		
		hill.x = (hill.x + deltaS*30);
		if (hill.x >=w) { hill.x = 0- hill.image.width*hill.scaleX}
		
		hill2.x = (hill2.x + deltaS*45);
		if (hill2.x >=w) { hill2.x = 0-hill2.image.width*hill2.scaleX; }
		}
		
		if(lado=='der'){
		derecha()
		}
		else if(lado=='izq'){
		izquierda()
		}
		stage.update(event);
		
		
		
		
	}
	