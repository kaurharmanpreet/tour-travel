/*on scroll*/
$(window).scroll(function(){
	if( $(window).scrollTop())
    {
	    $('.navigation').addClass('on-scroll');
    }

    else{
	    $('.navigation').removeClass('on-scroll');
    }
 });


/*on toggle*/
function onClickMenu(){
	document.getElementById("menu").classList.toggle("icon");
	document.getElementById("mySidenav").classList.toggle("side-bar");
}


/*preloader*/
window.addEventListener("load", () =>{
    document.querySelector(".pre-loader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".pre-loader").style.display="none";
    },5000)
});

