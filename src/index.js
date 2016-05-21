window.onload=function(){
	var autoIphone=document.getElementById("auto-iphone");
	var aLi=autoIphone.getElementsByTagName("li");
	var fourCircle=document.querySelector(".four-circle");
	var circleLi=fourCircle.getElementsByTagName("li")
	var autoSlogan=document.getElementById("auto-slogan");
	var sloganLi=autoSlogan.getElementsByTagName("li");
	console.log(sloganLi)
	autoIphone.style.height=aLi[0].offsetHeight+"px";
// 标语轮播
var num1=null;
	function autoplay1(){
		num1++
		if(num1>sloganLi.length-1){
			num1=0
		}
		for(var i=0;i<sloganLi.length;i++){
			sloganLi[i].style.opacity="0"
		}
		sloganLi[num1].style.opacity="1"
	}
setInterval(autoplay1,6000)
	// 手机轮播
	var num=null;
	var timer=null;
	function autoplay(){
		num++
		if(num>aLi.length-1){
			num=0
		}
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.opacity="0"
			circleLi[i].style.backgroundColor=""
		}
		aLi[num].style.opacity="1"
		sloganLi[num].style.opacity="1"
		circleLi[num].style.backgroundColor="#fff"
	}

	for(var i=0;i<circleLi.length;i++){
		circleLi[i].index=i
		circleLi[i].onclick=function(){
			clearInterval();
			for(var i=0;i<circleLi.length;i++){
				aLi[i].style.opacity="0"
				circleLi[i].style.backgroundColor=""
			}
			num=this.index;
			this.style.backgroundColor="#fff"
			aLi[this.index].style.opacity="1"
		}

	}
function cleartimer(){
	clearInterval(timer)
	setInterval(autoplay,5000)
}
cleartimer()
}