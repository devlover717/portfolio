const input = document.querySelector('input'); 
const btns = document.querySelectorAll('button'); 

let string = ''; 

Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (event.target.textContent == '=') {
            string = eval(string); 
            input.value = string;
        } else if (event.target.textContent == 'C') {
            string = ''; 
            input.value = string;
        } else {
            string += event.target.textContent; 
            input.value = string; 
        }
    })
});