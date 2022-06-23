
    let textArea=document.getElementById('floatingTextarea2');
    let characters=document.getElementById('Characters');
    let words=document.getElementById('Words');

    // ----------textArea----------
    textArea.addEventListener('input',(e)=>{
        let value=e.target.value;
      characters.innerHTML= value.length
     let newValue= value.trim();
   let splitValue=newValue.split(" ");
  let newArray=splitValue.filter((e)=>e!="" );
 
 words.innerHTML=newArray.length;
    })
// --------------buttons--------------
document.querySelector(".upper-case").addEventListener('click',()=>{
    textArea.value=(textArea.value).toUpperCase();
})
document.querySelector(".lower-case").addEventListener('click',()=>{
    textArea.value=(textArea.value).toLowerCase();
})
document.querySelector(".delete-text").addEventListener('click',()=>{
    textArea.value="";
})
document.querySelector(".copy-text").addEventListener('click',()=>{
   
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
})






