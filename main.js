console.log("hello")
let moreBtn = document.querySelectorAll(".moreBtn")
let answer = document.querySelectorAll(".answer")
let minus = document.querySelectorAll(".minus")
let questions = document.querySelectorAll(".question")

window.onload = function (){
    console.log("started")
    if(moreBtn){
        displayAnswer()

    }
    
}

// minus.addEventListener("click", ()=>{
//    
//     console.log("answer hidden")

// })

function displayAnswer(){
    moreBtn.forEach((question,i)=>{
        // console.log(question)
       
        question.addEventListener("click", ()=>{
            console.log("hellos")
            hideAnswer()
            question.style.display = "none"
            minus[i].style.display = "block"
            answer[i].style.display = "block"

            minus[i].addEventListener("click", ()=>{
                console.log('hello check')
                
                

                moreBtn[i].style.display = "block"
                minus[i].style.display= "none"
            answer[i].style.display = "none"
            
            
            })
            // hideAnswer()
            if(!answer[i]){
                minus[i].style.display= "none"
            }

        })
        
    })
}

function hideAnswer (){
    minus.forEach((hide, i)=>{
        moreBtn[i].style.display = "block"
            minus[i].style.display= "none"
            answer[i].style.display = "none"
            

    })
}

