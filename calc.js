function c(val)
{
document.getElementById("dplay").value=val;
}
function b(val)
{
document.getElementById("dplay").value+=val;
}
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("dplay").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}  

