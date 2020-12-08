const climate=document.getElementById("climate")
const consumption=document.getElementById("consumption")
const resources=document.getElementById("resources")
const people=document.getElementById("people")

const save=document.getElementById("save")
const iframe=document.getElementById("frame")

climate.onclick=()=>{
    climate.style.background="#2F80ED"
    consumption.style.background="trasparent"
    resources.style.background="transparent"
    people.style.background="trasparent"
document.body.style.backgroundImage="url(background-image: url(https://i1.faceprep.in/prograd-junior/climate-change-bg.png)"
save.innerHTML="Do your bit! Save trees, use renewable energy soureces and prefer to travel green"
iframe.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

}
consumption.onclick=()=>{
    climate.style.background="trasparent"
    consumption.style.background="#4FAF61"
    resources.style.background="transparent"
    people.style.background="trasparent"
    document.body.style.backgroundImage="url(https://i1.faceprep.in/prograd-junior/food-wastage-bg.png)"
    save.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the left overs."
    iframe.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}
resources.onclick=()=>{
    climate.style.background="trasparent"
    consumption.style.background="transparent"
    resources.style.background="#F2994A"
    people.style.background="trasparent"
    document.body.style.backgroundImage="url(https://i1.faceprep.in/prograd-junior/natural-resources-bg.png)"
    save.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle";
    iframe.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}
people.onclick=()=>{
    climate.style.background="trasparent"
    consumption.style.background="transparent"
    resources.style.background="trasparent"
    people.style.background="#5F6E79"
    document.body.style.backgroundImage="url(https://i1.faceprep.in/prograd-junior/poverty-bg.png)"
    save.innerHTML="Do your bit! Never waste food.Rather offer it to people or animals who are in need."
    iframe.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}




