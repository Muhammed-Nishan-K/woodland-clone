
var nsv1=document.getElementById("nsv1-1-1");
nsv1.addEventListener("mouseover",men);
function men()
{
    document.getElementById("men").style.display="block";
    document.getElementById("women").style.display="none";
}
var nsv2=document.getElementById("nsv1-1-2");
nsv2.addEventListener("mouseover",women);
function women()
{
    document.getElementById("women").style.display="block";
    document.getElementById("men").style.display="none";
}
var input1=document.getElementById("input1");
input1.addEventListener("click", changecolor);
function changecolor()
{
    document.getElementById("p1").style.transform="translatey(-19px)";
}

var play1=document.getElementById("carouselExampleAutoplaying");
play1.addEventListener("mouseover",desapier);
function desapier()
{
    document.getElementById("men").style.display="none";
    document.getElementById("women").style.display="none";
    document.getElementById("popup1").style.transform="translate(-100%)";
}
var csstrans=document.getElementById("class1");
csstrans.addEventListener("click",translate1);
function translate1()
{
    document.getElementById("popup1").style.transform="translate(0%)";
    document.getElementById("popup1").style.transition="transform 1s";
    


    
}