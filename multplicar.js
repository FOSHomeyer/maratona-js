/**
 * Receber 2 números e multiplicar o resultado
 */

/**exemplo 1 */
function multiplicar1(a, b){
    console.log(a*b)
}

function multiplicar2(a, b){
    return console.log(a*b)
}

function multiplicar3(a=0, b=0){
    console.log(a*b)
} 

function multiplicar4(a=0, b=0){
    if(a <= 0 && b <= 0){
        console.log('Digite um valor acima de zero')
        return
    }
    console.log(a*b)
}

const multiplicar5 = (a, b) => {
    if(a <= 0 && b <= 0){
        console.log('Digite um valor acima de zero')
        return
    }
    console.log(a*b)
}

multiplicar5()