let btn = document.querySelector('#btn');

// add an event listener to the button element
// such that when it clicks, it will run
// the function defined as the second parameter
btn.addEventListener('click', function(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;

    console.log(name, email);
})