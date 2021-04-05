// window.setTimeout(function(){
// 	var arr=[];


// var input= prompt("solluda");

// while(input!=="quit")
// {
// if(input==="new"){
// 	var kk=prompt("inaah");
// 	arr.push(kk);
// 	console.log(kk +" added to list");
// }

// else if (input==="list"){
	
// 	arr.forEach(function(color,gg){
// 		console.log(gg +":"+color);
// 	});
// }

// else if (input==="del"){
// 	var ind=prompt("number tell");
	
// 	arr.splice(ind,1);
// 	console.log("removed");

// }

// input= prompt("solluda");}

// },500);

// function prar(arr){
	
// 	for(var i=arr.length-1 ; i>=0 ; i--){
// console.log(arr[i]);
// 	}
// };



// var arr=[
// { title:"as",
//  rate:5,
//  yn:true},{ title:"aas",
//  rate:4.5,
//  yn:true},{ title:"kk",
//  rate:4,
//  yn:false}
// ];

// arr.forEach(function(color){
// 	if(color.yn===true){
// 		var k="have watched";
// 	}
// 	else{
// 		var k="not seen";
// 	}
// 	console.log("you "+k+"sjsj  "+color.title+":"+color.rate);

// });

// var jn= document.querySelector("button");
// var hd= document.querySelector("p");


// jn.addEventListener("click", function(){
// 	hd.textContent="mamamamamam";
// });

// var lis= document.querySelectorAll("li");
// for( var i=0;i<lis.length;i++){
//     lis[i].addEventListener("click",function(){
//     	this.style.color = this.style.color === "blue" ? "black":"blue";
// });}
 
var pla= document.getElementsByClassName("ll");
var k=0;
var m=0;
var b=0;
 
 var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var dro=document.querySelector("h5");
var res=document.getElementById("kk");
var pla1=document.getElementById("ss");
var pla2=document.getElementById("dd");

var inp=document.querySelector("input");
var state=false;

inp.addEventListener("input",function(e){
	dro.textContent= "playing to:"+e.target.value;
	 b=Number(e.target.value);
})



pla1.addEventListener("click",function(){
	
if(!state){
	k++;
	if(k===b){ state=true; p1.classList.add("gree");}
	p1.textContent= k;}
});

pla2.addEventListener("click",function(){
	
	if(!state){	m++;
	if(m===b){state=true;  p2.classList.add("gree");}
	p2.textContent= m;}

});


res.addEventListener("click",function(){
 k=0;
 m=0;
 b=0;

p1.textContent= k;
p2.textContent= m;
state=false;
dro.textContent="playing for:"+ inp.value;
p1.classList.remove("gree");
p2.classList.remove("gree");

})
