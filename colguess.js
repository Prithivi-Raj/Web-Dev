
var sqr= document.querySelectorAll(".square");
var col=["rgb(255, 255, 0)",
         "rgb(0, 255, 255)",
         "rgb(255, 0, 255)",
         "rgb(0, 0, 255)",
         "rgb(255, 0, 0)",
         "rgb(0, 255, 0)"];

for(var i=0;i<sqr.length;i++){
	
		sqr[i].style.backgroundColor=col[i];
	}
         
