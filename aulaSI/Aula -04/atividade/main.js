let z1 = parseFloat(prompt("Digite um numero:"));
let z2 = prompt('Qual operção você que usar?');
let z3 = parseFloat(prompt('Digiti outro valor:'));

let soma = z1+z3;
let Divisão = z1/z3;
let Subtração = z1-z3;
let Multiplicação = z1*z3;
let Potencia = z1^z3;



if(z2 == "Soma") {
    alert(`Resultado ${soma}`);
}else if (z2 == "Divisão"){
     if(z3 == 0){
        alert("Operação Invalida");
    } else if(z3 == 0){
        alert(`Resultado ${Divisão}`);
    }
}else if(z2 == "Subtração"){
    alert(`Resultado ${Subtração}`);
}else if(z2 == "Multiplicação"){
    alert(`Resultado ${Multiplicação}`);
}else if(z2 == 'Potencia'){
    alert(`Resultado ${Potencia}`);
}else{
    alert("Operação Invalida");
}