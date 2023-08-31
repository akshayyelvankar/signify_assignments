
var data= document.getElementsByClassName("collapsible");
console.log(data)
var i;
for(i=0;i<data.length;i++)
{
   data[i].addEventListener("click",function()
   {
       this.classList.toggle("active");
       var content=this.nextElementSibling;
       if(content.style.display==="block")
       {
         content.style.display = "none";
       }
       else{
        content.style.display="block";
       }
   }) 
}