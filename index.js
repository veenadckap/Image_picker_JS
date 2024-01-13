"use strict"

let div1=document.createElement("div")
div1.id="secondDiv"

let div=document.createElement("div")
div.id="firstDiv"


let pic=document.createElement("img")
pic.setAttribute("src"," ")
pic.id="Picture"
pic.src='photo-1.jpeg'

let btn1=document.createElement("button")
btn1.id="Button1"
btn1.innerHTML="Previous Image"

let btn2=document.createElement("button")
btn2.id="Button2"
btn2.innerHTML="Next Image"



// div.appendChild(img)
div1.append(pic)
div.append(btn1,btn2)
document.body.append(div1)
document.body.append(div)


let d=document.getElementById("Button2")

let photo=["photo-1.jpeg","photo-2.jpg","photo-3.jpg","photo-4.jpg","photo-5.jpg",
           "photo-6.jpg","photo-7.jpeg","photo-8.jpeg","photo-9.jpeg","photo-10.jpg",
           "photo-11.jpg","photo-12.jpg","photo-13.jpg","photo-14.jpg","photo-15.jpeg",
           "photo-16.jpg","photo-17.jpeg","photo-18.jpg","photo-19.jpg","photo-20.jpeg"]



let x=1

btn2.addEventListener("click",but)
function but(){
    if(x==1){
        x=20
    }
    else{
        firstDiv.style.backgroundImage=photo[x]
    x= x > photo.length ? -1 : x -1;
    pic.src=photo[x]
    }
}
btn1.addEventListener("click",next)
function next(){
    if(x==0){
        x=20
    }
    else{
        firstDiv.style.backgroundImage=photo[x]
    x= x > photo.length ? 1 : x -1;
    pic.src=photo[x]
    }
}