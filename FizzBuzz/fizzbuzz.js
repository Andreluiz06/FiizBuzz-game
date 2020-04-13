//fizz buzz
//divisivel por 3 =>FIZZ
//Divisivel por 5 =>BUZZ
//Divisivel por 3 e 5 => FIZZBUZZ
//não é divisivel por 3 ou 5 => entrada
//não é um numero => não e um numero
const resultado = fizzbuzz();
console.log(resultado);

function fizzbuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Não é um numero';
    if((entrada % 3 === 0) && (entrada % 5 ===0))
    return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'buzz';
    
    return entrada;
}