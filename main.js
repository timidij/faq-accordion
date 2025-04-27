console.log("hello")
let moreBtn = document.querySelectorAll(".moreBtn")
let answer = document.querySelectorAll(".answer")
let minus = document.querySelectorAll(".minus")
let text = document.querySelectorAll(".question")
function displayAnswer(){
    text.forEach((element,i)=>{
        let isAnswer = false
        // answer[i].style.display='none'
        element.addEventListener("click", ()=>{
            
            if(!isAnswer){
                answer[i].style.display= 'revert'
                minus[i].style.display= 'revert'
                moreBtn[i].style.display= 'none'
                // answer[i].classList.toggle('mystyle')
                isAnswer = true
                
            }else{
                answer[i].style.display = 'none'
                minus[i].style.display= 'none'
                moreBtn[i].style.display= 'revert'

                isAnswer = false

            }

        })
    })
}
displayAnswer()