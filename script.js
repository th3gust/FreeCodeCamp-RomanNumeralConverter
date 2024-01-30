const inputNumber = document.getElementById('number')
const convertBtn = document.getElementById('convert-btn')
const output = document.getElementById('output')

const romanNumberConverter = (input) =>{

    let n = parseInt(input)

    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';

    for (const pair of romanNumerals) {
        while (n >= pair.value) {
            result += pair.numeral;
            n -= pair.value;
        }
    }

    return result;
}

const alert = (input) =>{
    output.classList.add('alert')
    output.classList.remove('hidden')
    if (input === ''){
        output.innerText = 'Please enter a valid number'
    } else if (input <= 0){
        output.innerText = 'Please enter a number greater than or equal to 1'
    } else if (input >= 4000){
        output.innerText = 'Please enter a number less than or equal to 3999'
    } else{
        output.classList.remove('alert')
        output.innerText = romanNumberConverter(inputNumber.value)
    }
    inputNumber.value = ''
}


convertBtn.addEventListener('click', () =>{
    alert(inputNumber.value)
})