let dMb = document.querySelector(".dMb")
let body = document.querySelector('body')
let sunIcon = document.querySelector('.sun')
let heading = document.querySelector('h2')
function darkmood (){
    body.classList.toggle('darkmood')
    if (body.classList.contains('darkmood')){
        sunIcon.style.marginTop = '-60px'
        heading.innerHTML = 'DARK MOOD'
    }else{
        sunIcon.style.marginTop = '0px'
        heading.innerHTML = 'LIGHT MOOD'
    }
    
}
dMb.addEventListener('click', darkmood)