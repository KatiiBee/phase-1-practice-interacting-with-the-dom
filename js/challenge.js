document.addEventListener("DOMContentLoaded", ()=>{
    
    let interval= setInterval (incrementCounter, 1000)
    const plus = document.getElementById ("plus")
    plus.addEventListener("click", incrementCounter)
    const minus= document.getElementById("minus")
    minus.addEventListener("click", ()=>{
        let count= document.getElementById("counter")
        count.textContent = parseInt(count.textContent, 10) -1
    })

    const heart = document.querySelector("#heart")
    let likesObj ={}
    
    heart.addEventListener("click", ()=>{
        let countValue= document.getElementById("counter").textContent
        let listOfLikes= document.querySelector(".likes")
        if (likesObj[countValue]>0) {
            likesObj[countValue] ++
            const foundLi= document.getElementById(countValue)
            foundLi.innerText = `${countValue} has been liked ${likesObj [countValue]}`
        }else {
            likesObj [countValue]=1
            let li= document.createElement ("li")
            li.innerText = `${countValue} has been liked ${likesObj [countValue]}`
            li.id =countValue
            listOfLikes.appendChild(li)
        }

       
        
    })
    const submit =document.querySelector("#submit")
    const pause =document.querySelector("#pause")
    pause.addEventListener("click", ()=>{
        if (pause.innerText ==="resume") {
            pause.innerText = "pause"
            interval= setInterval (incrementCounter, 1000)
        }else {
            pause.innerText = "resume"
            clearInterval(interval)
        }
        minus.disabled = !minus.disabled
        plus.disabled = !plus.disabled
        heart.disabled = !heart.disabled
        submit.disabled= !submit.disabled  
    })

    let commentsForm = document.querySelector ("#comment-form")
    commentsForm.addEventListener("submit", (e)=>{
        e.preventDefault ()
        //console.log ("event", e )
        const list= document.getElementById ("list")
        let li=document.createElement("li")
        li.innerText=e.target[0].value
        list.appendChild(li)
        commentsForm.reset ()
         
    })
    

})

function incrementCounter(){
    let count= document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) +1
}



