submitbutton = document.getElementById("submit");
namein = document.getElementById("name");
table=document.getElementById("table");
table.placeholder="Enter Table You Wish To Practice"
namein.placeholder="Enter Name Here"



//window.addEventListener("load",function(){
    //alert("Welcome To The Neilshawn Math Game")
//})

submitbutton.addEventListener("mouseover",function(){
    submitbutton.style.backgroundColor="lightgreen";
    submitbutton.style.transform="scale(1.2)";
})

submitbutton.addEventListener("mouseout",function(){
    submitbutton.style.backgroundColor="rgb(0, 0, 0)";
    submitbutton.style.transform="scale(1)";
})



submitbutton.addEventListener("click",function(){
    if(namein.value!=="" && table.value>=1 && table.value<=12){
        localStorage.setItem("name",namein.value)
        localStorage.setItem("number",table.value)
        window.location.href="Game.html"
       
        
    }  
    else{
     table.style.backgroundColor="red"
       namein.style.backgroundColor="red"
       namein.focus()
        
        
    }  
})







