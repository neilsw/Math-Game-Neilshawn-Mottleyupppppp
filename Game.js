name=localStorage.getItem("name")
well=document.getElementById("welcome")
well.innerHTML=`Welcome &nbsp;  <span style="color:red"> ${name} </span>`
btn=document.getElementById("btn")
newn=document.getElementById("newnumber")
newn.addEventListener("click",function(){
    window.location.href="index.html"
})
retry=document.getElementById("reload")

number=localStorage.getItem("number")
bott=document.getElementById("numberchosen")
random=document.getElementById("random")

correction=document.getElementById("correction")
ans=document.getElementById("answerinput")

right=document.getElementById("rightpane")

function Game(names,numb){
numb=number
names=name
    ans.focus()
    bott.innerHTML=numb
    let x=Math.floor(Math.random()*(12-1+1))+1
    localStorage.setItem("rando",x)
    random.innerHTML=x
    preans=numb*x
    console.log(preans)

btn.addEventListener("mouseover",function(){
     btn.style.transform="scale(1.1)"
     
})

btn.addEventListener("mouseout",function(){
btn.style.transform="scale(1)"
})
let tries=1
let count=3
correction.innerHTML=`${count} chances`

    btn.addEventListener("click",function(){
        newn.style.opacity="1"
        btn.style.transform="scale(1)"
        ans=document.getElementById("answerinput").value

 if(tries<3){
if(ans!=preans){
    count--
    correction.style.backgroundColor="red"
    correction.innerHTML=`WRONG!!! ${count} more `
    tries++
    
 }
 else{
    correction.style.backgroundColor="lightgreen"
    correction.innerHTML=`CORRECT!!! ${names}`
    
    retry.style.opacity="1"
    let tries=0
    

 }
  
 }
 else{
    btn.style.transform="translateX(-30px)"
    //alert(`YOU HAVE FAILED...THE CORRECT ANSWER IS ${preans} `)
correction.innerHTML=`FAIL!!! `
function showanswer(numbe,xe){
    numbe=parseInt(localStorage.getItem("number"))
    xe=parseInt(localStorage.getItem("rando"))
let stars = "";
for (let i = 0; i < numbe; i++) {
    for (let f = 0; f < xe; f++) {
        stars += "* ";
    }
    retry.style.opacity="1"
    stars += "<br>";
    right.style.transform="translateX(500px)"
}
right.innerHTML=stars


 }
 showanswer(number,random)
 }
})
    
}

Game()

reload=document.getElementById("reload")
reload.addEventListener("click",function(){
location.reload()
})