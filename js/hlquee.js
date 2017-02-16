/*
* HL
*/
function HLqquee(lineheight, speed, delay, id) {	
	this.tim; 
	this.pg = false; 
	this.obj = Dd(id); 
	this.hml = this.obj.innerHTML; 
	if(this.hml.length < 10) 
		return;
	this.obj.innerHTML = '<div id="'+id+'_tmp"><div>'+this.hml+'</div></div>';
	var hml1 = Number(Dd(id).style.height.replace('px', '')); 
	var hml2 = Dd(id+'_tmp').scrollHeight;
	if(lineheight == -1) 
	{
		alert(hml2); 
		return;
	}
	if(hml2*2 <= hml1) 
	{ 
		this.obj.innerHTML = this.hml; 
		return; 
	} 
	else if(hml2 >= hml1) 
	{ 
		this.obj.innerHTML = this.hml + this.hml; 
	} 
	else 
	{ 
		this.obj.innerHTML = this.hml + this.hml + this.hml;	
	}
	this.obj.scrollTop = 0; 
	var _this = this;
	this.obj.onmouseover = function() {_this.pg = true;} 
	this.obj.onmouseout = function() {_this.pg = false;}
	this.start = function() { this.tim = setInterval(function() {_this.scrolling();}, speed); if(!this.pg) {this.obj.scrollTop += 1;} } 
	this.scrolling = function() { if(this.obj.scrollTop%lineheight !=0) { this.obj.scrollTop += 1; if(this.obj.scrollTop == hml2) this.obj.scrollTop = 0; } else { clearInterval(this.tim); setTimeout(function() {_this.start();}, delay); } }
	setTimeout(function() {_this.start();}, delay);
}
