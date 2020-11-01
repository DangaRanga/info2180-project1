/* Add your JavaScript to this file */
window.addEventListener('load', function(){
    let submitButton = document.querySelector('.newsletter button');
    let message = document.querySelector('.message');
    var emailField = document.getElementById('email');
    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        let fieldValue = emailField.value;
        if(fieldValue === ''){
            message.innerHTML = "Please enter a valid email address";
        }else{
            message.innerHTML = `Thank You! Your email address ${fieldValue} has been added`;
            document.getElementById('email').value = '';
        }
    });
});
