const button_inc = document.querySelector("#inc");
const button_dec = document.querySelector("#dec");

const current = document.querySelector("#currentSign"); // Corrected selector
let value = 15;

button_inc.addEventListener('click', () => {
    
    value += 1; 
    current.src = "assets/sign" + value + ".png";
    console.log(current.src);
    checker_inc()
});

button_dec.addEventListener('click', () => {
    
    value -= 1; 
    current.src = "assets/sign" + value + ".png";
    console.log(current.src);
    checker_dec();
});


function checker_inc(){
    if (value >= 39) {
        button_inc.disabled = true;
    }
    else{
        button_inc.disabled = false
        button_dec.disabled = false
    }
}

function checker_dec(){
    

    if (value <= 1) {
        button_dec.disabled = true;
    }
    else{
        button_dec.disabled = false
        button_inc.disabled = false
    }
}


const main_img = document.querySelector(".cover")

current.addEventListener('click',()=>{
    main_img.src = current.src;
})