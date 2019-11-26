var captcha_str;
var ctx;
var canvas;
const captcha_length = 6;
function captchaShow(){
    randomData();
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.font = "bold 24px verdana, sans-serif ";
    ctx.fillStyle = "#828282";
	ctx.fillText(captcha_str,canvas.width/8,canvas.height/2);
    
}

function randomData(){
    captcha_str="";
	var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	var num = [0,1,2,3,4,5,6,7,8,9];
	var special_ch = ['#','!','$','&'];
	
	var random_alpha = [];
	var random_num = [];
	var random_special_ch = [];
    
	for(var i=0;i<10;i++){
		random_alpha.push(alpha[Math.floor((Math.random() * alpha.length-1) + 1)]);
		random_num.push(num[Math.floor((Math.random() * num.length-1) + 1)]);
		random_special_ch.push(special_ch[Math.floor((Math.random() * special_ch.length-1) + 1)]);
	}
	var data1 = random_alpha.concat(random_num); 
	var data2 = data1.concat(random_special_ch);
	for (i=0;i<captcha_length;i++){
        captcha_str += data2[Math.floor((Math.random() * data2.length-1)+1)];
        
    }
}

function checkCaptcha(){
    var getFromCaptcha = document.getElementById("captcha").value;
    if(getFromCaptcha == ""){
        document.getElementById("captchaMsg").innerHTML = "Insert Captcha";
    }
    else{
        if(getFromCaptcha == captcha_str){
            document.getElementById("captchaMsg").innerHTML = "Correct";
        }
        else{
            document.getElementById("captchaMsg").innerHTML = "Wrong!! Try again";
            ctx.clearRect(0,0,canvas.width,canvas.height);
            captchaShow();
        }
    }
    
}
function reCaptcha(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    captchaShow();
}

