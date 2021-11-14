var c = document.getElementById("Canvas_1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "gray"; 
ctx.lineWidth = 4; 
ctx.rect(20, 20, 760, 550);
ctx.stroke();
//----------------------------------Circle Start----------------------------//
ctx.beginPath();
ctx.strokeStyle = "blue"; 
ctx.lineWidth = 4; 
ctx.arc(250,240,70, 0, 2 * Math.PI);
ctx.stroke();
//-----------------------------Next Circle Start----------------------------//
ctx.beginPath();
ctx.strokeStyle = "orange"; 
ctx.lineWidth = 4; 
ctx.arc(320,325,70, 0, 2 * Math.PI);
ctx.stroke();
//-----------------------------Next Circle Start----------------------------//
ctx.beginPath();
ctx.strokeStyle = "black"; 
ctx.lineWidth = 4; 
ctx.arc(400,240,70, 0, 2 * Math.PI);
ctx.stroke();
//-----------------------------Next Circle Start----------------------------//
ctx.beginPath();
ctx.strokeStyle = "green"; 
ctx.lineWidth = 4; 
ctx.arc(470,325,70, 0, 2 * Math.PI);
ctx.stroke();
//-----------------------------Next Circle Start----------------------------//
ctx.beginPath();
ctx.strokeStyle = "red"; 
ctx.lineWidth = 4; 
ctx.arc(550,240,70, 0, 2 * Math.PI);
ctx.stroke();
//---------------------------------End--------------------------------------//