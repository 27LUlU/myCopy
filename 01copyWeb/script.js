
/*
 ** Header
*/
// primary nav effect
var header = document.getElementsByClassName('header')

window.addEventListener("scroll", function(){
    header[0].classList.toggle("scroll", this.window.scrollY>0)
})
