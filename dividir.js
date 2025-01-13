/**
 * Receber 2 números e dividir o resultado
 */


function dividir1(a, b){
    console.log(a/b)
}

function dividir2(a, b){
    return console.log(a/b)
}



function dividir3(a=0, b=0){
    if(a <= 0 && b <= 0){
        console.log('Digite um valor acima de zero')
        return
    }
    console.log(a/b)
}

const dividir4 = (a, b) => {
    if(a <= 0 && b <= 0){
        console.log('Digite um valor acima de zero')
        return
    }
    console.log(a/b)
}

dividir5()