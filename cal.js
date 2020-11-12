var num=document.getElementById("num1");
var num4=document.getElementById("num2");
var result1=document.getElementById("result"); 
// num2.value ="it works";
// result1.innerText="it amuses me
var form=document.getElementById("form1");
form.addEventListener("submit", function(event){
if (! num.value || !num4.value) {
alert("pleaes enter the number");    
} else{
var x=  parseFloat(num.value);
var y= parseFloat( num4.value);//will convert a string into a data
var percentageresult=x/y;
var percent=percentageresult*100

result1.innerText="Answer :" + percent +"%";
event.preventDefault();
}
});