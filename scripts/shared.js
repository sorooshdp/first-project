let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let SelectPlanBtn = document.querySelectorAll('.plan button')
let ModalClosBtn = document.querySelector('.modal__action--negative')

for(let i=0;i<SelectPlanBtn.length;i++){
    SelectPlanBtn[i].addEventListener('click',function(){
        modal.style.display='block'
        backdrop.style.display='block'
    })
}

backdrop.addEventListener('click',closemodal)
ModalClosBtn.addEventListener('click',closemodal)

function closemodal(){
    backdrop.style.display='none'
    modal.style.display='none'
}