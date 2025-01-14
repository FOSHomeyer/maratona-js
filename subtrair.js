/**
 * Receber 2 números e subtrair o resultado
 */


function subtrair1(a, b){
    console.log(a-b)
}

function subtrair2(a, b){
    return console.log(a-b)
}

function subtrair3(a=0, b=0){
    console.log(a-b)
}

function subtrair4(a=0, b=0){
    if(a <= 0 && b <= 0){
        console.log('Digite um valor acima de zero')
        return
    }
    console.log(a-b)
}

const subtrair5 = (a, b) => {
    if( a <= 0 && b <= 0){
        console.log('Digite um valor acima de zero')
        return
    }
    console.log(a-b)
}

subtrair5(0, 0)