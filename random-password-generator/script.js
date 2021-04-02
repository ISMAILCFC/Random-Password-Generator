//ABCDEFGHIJKLMNOPQRSTUVWXYZ
//abcdefghijklmnopqrstuvwxyz
//!\"$%&/()=@\\.\';:+=^*_-
//1234567890


const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=@\\.\';:+=^*_-1234567890';

let output = document.getElementById("output");

function randomValue(value) {

       return Math.floor(Math.random() * value);
   // console.log(Math.floor(Math.random() * value));
}

function genPassword() {

    let length = document.getElementById("length").value;
    
    document.getElementById("length-value").textContent = length;

    let str = '';

    for (let i = 0; i < length; i++) {
        
        let random = randomValue(characters.length);
        str += characters.charAt(random); 
    }

    output.value = str;

}

function copyPassword(){
    output.select();
    document.execCommand('copy');
    alert("Password Copied!!");

}
genPassword();