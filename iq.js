function val(obj)
{
    document.getElementById("display").value += obj;
}
function calculate()
{
    var y = 0;
    var x = 0;
  y = document.getElementById("display").value ;
    x = eval(y);
    document.getElementById("display").value = x;
   /// document.getElementById("display").style.backgroundColor="red";

}
function eraseScreen()
{
    document.getElementById("display").value = ' ';
}
function soundListen()
{
var s = document.getElementById("sound")
s.play();
}