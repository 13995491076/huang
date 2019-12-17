function rem(){
    document.documentElement.style.fontSize=document.documentElement.clientWidth/10.85+"px"
}
rem()
window.onresize=rem;