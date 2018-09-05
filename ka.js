/*
* @Author: gf880623
* @Date:   2018-09-04 21:47:32
* @Last Modified by:   gf880623
* @Last Modified time: 2018-09-06 00:43:35
*/
	    function card(box,son){
	    	for(let i=0;i<box.length;i++){
			box[i].onmouseover=function(){
			for(let j=0;j<son.length;j++){
				son[j].style.display="none";
			}
			son[i].style.display="block";
			}
			box[i].onmouseout=function(){
			son[i].style.display="none";
			}
		}
	}


function Dingbu( fh){
	fh.onclick=function(){
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
		
	}	
}
window.onscroll=function(){
	let dongs=document.body.scrollTop||document.documentElement.scrollTop;
	let fh=document.querySelectorAll(".bar-link")[3];
	if(dongs>1000){
		fh.style.display="block";
	} else{
		fh.style.display="none";
	}
}
// window.onscroll=function(){
// 	if(document.body.scrollTop>500){
// 			fh.style.display="block";
// 		}
// 		else{
// 			fh.style.display="none";
// 		}
// 	}
// 	
// 	

function Tab(lis,card){
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			for(let j=0;j<lis.length;j++){
				card[j].style.display="none";
			}
			card[i].style.display="block";
		}
	}
}
