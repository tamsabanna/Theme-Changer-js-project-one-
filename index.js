const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        } else {
            body.style.backgroundColor = e.target.id
        }
    })
})