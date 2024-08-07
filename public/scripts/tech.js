let aside_main_content=document.querySelector("#aside_content")
let menu=document.querySelector("#menu");
function overlay()
{
  aside_main_content.style.display="block";
}
menu.addEventListener("click",overlay);