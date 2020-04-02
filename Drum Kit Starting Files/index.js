var count=document.querySelectorAll(".drum").length;
for(var i=0;i<count;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		console.log(this);
		var sond=new Audio("sounds/tom-1.mp3");
		sond.play();
	});
}

document.addEventListener("keydown",function(event){
	var keyb=event.key;
	
	switch(keyb){
		case "w":
			var sond=new Audio("sounds/crash.mp3");
		    sond.play();
			break;
		case "a":
			var sond=new Audio("sounds/kick-bass.mp3");
			sond.play();
			break;
		case "s":
			var sond=new Audio("sounds/snare.mp3");
			sond.play();
			break;
		case "d":
			var sond=new Audio("sounds/tom-1.mp3");
			sond.play();
			break;
		case "j":
			var sond=new Audio("sounds/tom-2.mp3");
			sond.play();
			break;
		case "k":
			var sond=new Audio("sounds/tom-3.mp3");
			sond.play();
			break;
		case "l":
			var sond=new Audio("sounds/tom-4.mp3");
			sond.play();
			break;
		default:
			console.log(event.key);
		
	}
	
});