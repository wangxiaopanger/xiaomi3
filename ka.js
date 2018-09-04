/*
* @Author: gf880623
* @Date:   2018-09-04 21:47:32
* @Last Modified by:   gf880623
* @Last Modified time: 2018-09-04 21:55:49
*/
	    function card(box,son){
	    	for(let i=0;i<box.length;i++){
			box[i].onmouseover=function(){
			// for(let j=0;j<son.length;j++){
			// 	son[j].style.display="none";
			// }
			son[i].style.display="block";
			}
			box[i].onmouseout=function(){
			son[i].style.display="none";
			}
		}
	}