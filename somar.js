/**
 * Receber 2 numeros e somar retornando o resultado
 */

/** exemplo1 */
function somar1(a, b){
    console.log(a+b)
}

function somar2(a, b){
    return console.log(a+b)
}

function somar3(a=0, b=0){
    console.log(a+b)
}

function somar4(a=0, b=0){
    if(a <= 0 && b <=0){
        console.log('digite um valor acima de zero')
        return
    }
    
    console.log(a+b)
}

const somar5 = ( a, b ) => {
    if(a <= 0 && b <=0){
        console.log('digite um valor acima de zero')
        return
    }
    
    console.log(a+b)
}

somar5()