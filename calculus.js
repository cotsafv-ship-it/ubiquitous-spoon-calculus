//math functions that are not optimised


function approxDerivative(func, x) {
    let result
    for (let i = 1; i > 1e-10; i /= 10) {
        result = (func(x) - func(x - i)) / (x - (x - i))
        //console.log(result)   
    }

    return result
}

function approxIntegral(func, x1, x2) {
    let a = 100000000000000000000000000000000000000000000 //accuracy
    let total = 0
    for (let i = x1; i < x2; i += (x2 -x1) / a){
        total += func(i) * ((x2 -x1) / a)
    }

    return total

}

function swap(a,b) {
    console.log(a,b)
    
    a = a - b

    b = b + a

    a = b - a

    console.log(a,b)
}

console.log(approxIntegral(Math.sin, 0, Math.PI))