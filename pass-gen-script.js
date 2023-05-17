const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const lowerSet = 'abcdefghijklmnopqrstuvwxyz';
const numberSet = '1234567890'; 
const symbolSet = '~!@#$%^&*()_+';


//selectors
const passBox = document.querySelector('#pass-box'); 
const totalChars = document.querySelector('#total-char');
const upperInput = document.querySelector('#upper-case'); 
const lowerInput = document.querySelector('#lower-case');
const numberInput = document.querySelector('#numbers'); 
const symbolInput = document.querySelector('#symbols');
const copyBtn = document.querySelector('#copy');
let pswd; 


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}


const generatePassword = (password = '') => {
    copyBtn.innerText = 'Copy'; 
    copyBtn.style.backgroundColor = '#70727b99';

    if (upperInput.checked) {
        password += getRandomData(upperSet);  
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }

    if (password.length < totalChars.value) {
        return generatePassword(password)
        //recursive function 
    }

    pswd = truncateString(password, totalChars.value)
    passBox.innerText = pswd
     
}





//truncate function
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

const copy = () => {
    navigator.clipboard.writeText(pswd)
    copyBtn.innerText = 'Copied!';
    copyBtn.style.backgroundColor = '#34495e';

}


copyBtn.addEventListener('click', copy)

document.querySelector('#btn').addEventListener('click', () => {
    generatePassword()
})
//init call 
generatePassword() 
